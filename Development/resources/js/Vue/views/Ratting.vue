<template>
  <div class="ratting-container">
    <h3 class="title" v-if="!hasRatted">Give us your opinion about product</h3>
    <form v-if="!hasRatted">
      <label class="upload-image" id="update_user_image">
        <input
          type="file"
          id="update_user_image"
          accept="image/*"
          ref="images"
          multiple
          @change.prevent="inputFileChange"
        />
        <svg-vue icon="upload" class="dark-icon"></svg-vue>
        <p>Upload image here</p>
        <span>(Only *.jpeg and *.png images will be accepted)</span>
      </label>
      <div class="image-uploaded" v-if="imageData.length !== 0">
        <img
          :src="image"
          alt="image"
          v-for="(image, index) in imageData"
          :key="index"
        />
      </div>
      <label>
        Satisfied level
        <star-rating
          @rating-selected="setRating"
          style="margin-top: 1rem"
          :animate="true"
          :active-border-color="['#F6546A', '#a8c3c0']"
          :border-width="4"
          :star-size="20"
          :show-rating="false"
          :star-points="[
            23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19,
            31, 17,
          ]"
          :active-on-click="true"
          :clearable="true"
        ></star-rating>
      </label>
      <label
        >Message
        <textarea
          rows="5"
          placeholder="Wirte your message here"
          v-model="message"
        ></textarea>
      </label>
      <div class="submit">
        <button type="submit" @click.prevent="onSubmit">Submit Ratting</button>
      </div>
    </form>
    <div class="ratted" v-if="hasRatted">
      <svg-vue icon="smile-star"></svg-vue>
      <p>You already give us your review about this product !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ratting",
  data() {
    return {
      hasRatted: false,
      imageData: [],
      ratting: 0,
      message: "",
    };
  },
  components: {
    StarRating: () => import("vue-star-rating"),
  },
  created() {
    this.checkAlreardyRatted();
  },
  updated() {
    this.checkAlreardyRatted();
  },
  methods: {
    inputFileChange(e) {
      const file = e.target.files;
      this.imageData = [];
      for (var i = 0; i < file.length; i++) {
        if (this.imageData.length >= 4) {
          this.$toaster.error("Maximum 4 images!");
          break;
        }
        this.imageData.push(URL.createObjectURL(file[i]));
      }
    },
    setRating(ratting) {
      this.ratting = ratting;
    },
    onSubmit() {
      if (this.ratting == "") {
        this.$toaster.error("Please give us star ratting at least");
        return;
      } else {
        let formData = new FormData();
        formData.append("slug", this.$route.params.slug);
        for (let i = 0; i < this.$refs.images.files.length; i++) {
          formData.append("images[" + i + "]", this.$refs.images.files[i]);
        }
        formData.append("message", this.message);
        formData.append("ratting", this.ratting);
        axios
          .post("/api/review", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            this.hasRatted = true;
            this.$toaster.success("Successfully ratting!");
          })
          .catch((err) => {
            this.$toaster.error("You already ratted this order!");
          });
      }
    },
    checkAlreardyRatted() {
      axios
        .post("/api/review/check", {
          slug: this.$route.params.slug,
        })
        .then((res) => {
          console.log("ok");
        })
        .catch((err) => {
          this.hasRatted = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.ratting-container {
  .title {
    font-family: sans-serif;
    margin-bottom: 1.5rem;
  }
  form {
    width: 100%;
    .error {
      color: rgb(248 113 113);
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-top: 0.5rem;
    }
    label {
      color: #000;
      font-weight: 600;
      line-height: 1rem;
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      display: block;
    }
    input,
    textarea {
      display: block;
      width: 100%;
      border: 1px solid #eee;
      border-radius: 5px;
      padding: 0.8rem 1.2rem;
      transition: 0.25s;
      margin-top: 0.5rem;
      &:focus {
        border-color: #10b981;
      }
      &::placeholder {
        color: #bbb;
        opacity: 1;
      }
    }
    .upload-image {
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 2px dashed #ccc;
      border-radius: 10px;
      cursor: pointer;
      .dark-icon {
        width: 35px;
        height: auto;
        ::v-deep path {
          fill: #10b981;
        }
      }
      p {
        font-size: 0.9rem;
        line-height: 1.75rem;
        color: #000;
        text-align: center;
      }
      span {
        font-size: 0.8rem;
        color: rgba(156, 163, 175, 1);
      }
      input {
        display: none;
      }
    }
    .image-uploaded {
      width: 100%;
      margin-top: 1rem;
      flex-wrap: wrap;
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      img {
        width: 100px;
        height: 100px;
        padding: 0.5rem;
        border: 1px solid #eee;
        border-radius: 5px;
      }
    }
    p {
      text-align: left;
      font-size: 0.9rem;
      line-height: 2rem;
      width: 100%;
      margin-top: 0.5rem;
    }
    .submit {
      button {
        display: block;
        margin-left: auto;
        margin-top: 1.5rem;
        padding: 1rem;
        background-color: rgba(16, 185, 129, 1);
        border-radius: 5px;
        font-size: 1rem;
        color: #fff;
        font-family: sans-serif;
        cursor: pointer;
        transition: 0.25s;
        &:hover {
          background-color: rgba(5, 150, 105, 1);
        }
      }
    }
  }
  .ratted {
    svg {
      width: 50px;
      fill: orange;
      display: block;
      margin: 0 auto;
    }
    p {
      margin: 1rem 0;
      color: #4b5563;
      font-size: 0.9rem;
      width: 100%;
      text-align: center;
    }
  }
}
</style>