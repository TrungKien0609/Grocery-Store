<template>
  <div class="update-profile-container">
    <h3 class="title">Update Profile</h3>
    <form>
      <label class="upload-image" id="update_user_image">
        <input
          type="file"
          id="update_user_image"
          accept="image/*"
          ref="update"
          @change.prevent="inputFileChange('update')"
        />
        <svg-vue icon="upload" class="dark-icon"></svg-vue>
        <p>Upload image here</p>
        <span>(Only *.jpeg and *.png images will be accepted)</span>
      </label>
      <div class="image-uploaded">
        <img :src="imageData" alt="image" />
      </div>
      <div class="inputs">
        <div class="input">
          <p>Full Name</p>
          <input type="text" placeholder="Full Name" v-model="updateUserName" />
        </div>
        <div class="input">
          <p>Your Address</p>
          <input
            type="text"
            placeholder="Your Address"
            v-model="updateUserAddress"
          />
        </div>
        <div class="input">
          <p>Phone/Mobile</p>
          <input
            type="number"
            placeholder="Your Phone"
            v-model="updateUserPhone"
          />
        </div>
        <div class="input">
          <p>Your Email</p>
          <input
            type="email"
            placeholder="Your Email"
            disabled
            :value="updateUserEmail"
          />
        </div>
      </div>
      <div class="submit">
        <button type="submit" @click.prevent="submit">Update Profile</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "UpdateProfile",
  data() {
    return {
      imageData: "",
      updateUserName: "",
      updateUserEmail: "",
      updateUserPhone: "",
      updateUserAddress: "",
    };
  },
  created() {
    this.imageData = this.userAvatar;
    this.updateUserName = this.userName;
    this.updateUserEmail = this.userEmail;
    this.updateUserPhone = this.userPhone;
    this.updateUserAddress = this.userAddress;
  },
  methods: {
    inputFileChange(ref) {
      let input = this.$refs[ref];
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    ...mapActions(["updateUser", "logout"]),
    submit() {
      let obj = {
        id: this.userId,
        email: this.updateUserEmail,
        name: this.updateUserName,
        image: this.$refs.update,
      };
      this.updateUser(obj)
        .then((res) => {
          this.$toaster.success(
            "Update successfully. Please login again to see the change!"
          );
          this.logout().catch((err) => {
            this.$toaster.error("Some thing went wrong. Try again later on");
          });
        })
        .catch((err) => {
          this.$toaster.error(
            "Update failed. Please check carefully all the information!. Name must be uniqued and not emty."
          );
        });
    },
  },
  computed: {
    ...mapState([
      "userId",
      "userName",
      "userEmail",
      "userPhone",
      "userAddress",
      "userAvatar",
    ]),
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
      margin-top: 1rem;
      width: 100px;
      height: 100px;
      padding: 0.5rem;
      border: 1px solid #eee;
      border-radius: 5px;
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
