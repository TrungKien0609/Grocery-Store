<template>
  <div class="update-profile-container">
    <h3 class="title">Update Profile</h3>
    <form>
      <label class="upload-image" id="image">
        <input type="file" id="image" accept="image/*" @change="imageChange" />
        <Upload class="dark-icon" />
        <p>Upload image here</p>
        <span>(Only *.jpeg and *.png images will be accepted)</span>
      </label>
      <div class="image-uploaded">
        <img :src="imageData" alt="image" ref="image" />
      </div>
      <div class="inputs">
        <div class="input">
          <p>Full Name</p>
          <input type="text" placeholder="Full name" />
        </div>
        <div class="input">
          <p>Your Address</p>
          <input type="text" placeholder="Your address" />
        </div>
        <div class="input">
          <p>Phone/Mobile</p>
          <input type="number" placeholder="Your phone number" />
        </div>
        <div class="input">
          <p>Your Email</p>
          <input
            type="email"
            placeholder="Your email"
            value="Trungkien7300@gmail.com"
            disabled
          />
        </div>
      </div>
      <div class="submit">
        <button type="submit">Update Profile</button>
      </div>
    </form>
  </div>
</template>
<script>
import Upload from "@/assets/Icons/upload.svg";
export default {
  name: "UpdateProfile",
  components: {
    Upload,
  },
  data() {
    return {
      imageData: "",
    };
  },
  methods: {
    imageChange(e) {
      const input = e.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        this.$refs.image.style.display = "block";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.update-profile-container {
  .title {
    font-family: sans-serif;
    margin-bottom: 1.5rem;
  }
  form {
    width: 100%;
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
        path {
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
      margin-top: 1rem;
      width: 100px;
      height: 100px;
      padding: 0.5rem;
      border: 1px solid #eee;
      border-radius: 5px;
      img {
        display: none;
      }
    }
    p {
      text-align: left;
      font-size: 0.9rem;
      line-height: 2rem;
      width: 100%;
      margin-top: 0.5rem;
    }
    .inputs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
      @media (max-width: 660px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .input {
        input {
          width: 100%;
          font-size: 0.85rem;
          color: #000;
          ::placeholder {
            color: rgba(107, 114, 128, 0.3);
          }
          &[type="number"] {
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          }
          &[type="email"] {
            pointer-events: none;
          }
          padding: 1rem;
          border-radius: 7px;
          border: 1px solid #eee;
          &:focus-within {
            border-color: #10b981;
          }
        }
      }
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
}
</style>
