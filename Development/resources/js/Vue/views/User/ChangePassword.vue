<template>
  <div class="change-passoword-container">
    <h3 class="title">Change Password</h3>
    <form>
      <div class="input">
        <p>Email Address</p>
        <input
          type="email"
          placeholder="Your email"
          value="Trungkien7300@gmail.com"
          disabled
        />
      </div>
      <div class="input">
        <p>Current Password</p>
        <input
          type="password"
          required
          v-model="password"
          placeholder="Your current password"
        />
      </div>
      <div class="input">
        <p>New Password</p>
        <input
          type="password"
          required
          v-model="newPassword"
          placeholder="Your new password"
        />
      </div>
      <div class="input">
        <p>Confim New Password</p>
        <input
          type="password"
          required
          v-model="newPasswordConfirmation"
          placeholder="Confirm your new password"
        />
      </div>
      <div class="submit">
        <button type="submit" @click.prevent="submit">Change Password</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ChangePassword",
  data() {
    return {
      password: "",
      newPassword: "",
      newPasswordConfirmation: "",
    };
  },
  methods: {
    ...mapActions(["changePassword", "logout"]),
    submit() {
      if (this.newPassword !== this.newPasswordConfirmation) {
        this.$toaster.error("Password confimation not match!");
      } else {
        this.changePassword({
          id: this.userId,
          form: {
            password: this.password,
            new_password: this.newPassword,
            new_password_confirmation: this.newPasswordConfirmation,
          },
        })
          .then((res) => {
            this.$toaster.success(
              "Change password successfully. Please Login again to see the change!"
            );
            this.logout().catch((err) => {
              this.$toaster.error("Some thing went wrong. Try again later on");
            });
          })
          .catch((err) => {
            this.$toaster.error(err.response.data.message);
          });
      }
    },
  },
  computed: {
    ...mapState(["userId"]),
  },
};
</script>
<style lang="scss" scoped>
.change-passoword-container {
  .title {
    font-family: sans-serif;
    margin-bottom: 1.5rem;
  }
  form {
    width: 100%;
    p {
      text-align: left;
      font-size: 0.9rem;
      line-height: 2rem;
      width: 100%;
      margin-top: 0.5rem;
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
</style>
