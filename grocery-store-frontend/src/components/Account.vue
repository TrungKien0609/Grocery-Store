<template>
  <div class="account-container">
    <div class="drawer" @click="toggleAccount">Trung Kien</div>
    <div class="close" @click="toggleAccount">
      <Close class="dark-icon" viewBox=" 7 7  10 10" />
    </div>
    <div class="content">
      <div class="login" v-show="!showLogin">
        <h1 class="title">Login</h1>
        <p class="description">Login with your email and password</p>
        <form>
          <p>Email</p>
          <div class="input">
            <Mail class="dark-icon" viewBox="0 -10 100 100" /><input
              type="email"
              placeholder="Email"
            />
          </div>
          <p>Password</p>
          <div class="input">
            <Lock class="dark-icon" viewBox="0 0 550 550" /><input
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="action">
            <div class="remember">
              <label class="switch"
                ><input type="checkbox" /><span class="slider round"></span
              ></label>
            </div>
            <router-link to="" class="forgot-password">
              Forgot Password ?
            </router-link>
          </div>
          <div class="submit">
            <button type="submit">Login</button>
          </div>
        </form>
        <small>or</small>
        <div class="others">
          <div class="facebook">
            <Facebook class="icon" />
            Login with Facebook
          </div>
          <div class="google">
            <Google class="icon" viewBox="0 -5 24 24" />
            Login with google
          </div>
        </div>
        <p class="suggest" @click="toggleShowLogin">
          Not have a accout ? <span>Register now</span>
        </p>
      </div>
      <div class="signup" v-show="showLogin">
        <h1 class="title">Signing Up</h1>
        <p class="description">Create an account</p>
        <form>
          <p>Name</p>
          <div class="input">
            <User class="dark-icon" /><input
              type="text"
              placeholder="Full name"
            />
          </div>
          <p>Email</p>
          <div class="input">
            <Mail class="dark-icon" viewBox="0 -10 100 100" /><input
              type="email"
              placeholder="Email"
            />
          </div>
          <p>Password</p>
          <div class="input">
            <Lock class="dark-icon" viewBox="0 0 550 550" /><input
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="action">
            <div class="remember">
              <label class="switch"
                ><input type="checkbox" /><span class="slider round"></span
              ></label>
            </div>
            <router-link to="" class="forgot-password">
              Forgot Password ?
            </router-link>
          </div>
          <div class="submit">
            <button type="submit">Login</button>
          </div>
        </form>
        <small>or</small>
        <div class="others">
          <div class="facebook">
            <Facebook class="icon" />
            Login with Facebook
          </div>
          <div class="google">
            <Google class="icon" viewBox="0 -5 24 24" />
            Login with google
          </div>
        </div>
        <p class="suggest" @click="toggleShowLogin">
          Not have a accout ? <span>Register now</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Mail from "../assets/Icons/email.svg";
import Lock from "../assets/Icons/lock.svg";
import Close from "../assets/Icons/times.svg";
import Facebook from "../assets/Icons/facebook-nocolor.svg";
import Google from "../assets/Icons/google-nocolor.svg";
import User from "../assets/Icons/user-nocolor.svg";
export default {
  name: "Account",
  components: {
    Mail,
    Lock,
    Close,
    Facebook,
    Google,
    User,
  },
  data() {
    return {
      showLogin: null,
    };
  },
  methods: {
    toggleAccount() {
      this.$emit("toggleAccount");
    },
    toggleShowLogin() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>
<style lang="scss" scoped>
.account-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  .close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    width: 35px;
    height: 35px;
    z-index: 999;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s;
    &:hover {
      background-color: rgba(254, 202, 202, 1);
    }
    .dark-icon {
      width: 10px;
      height: 10px;
      display: block;
      path {
        fill: rgba(239, 68, 68, 1);
      }
    }
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 150;
    max-width: 500px;
    height: 95%;
    width: 100%;
    transform: translate(-50%, -50%);
    .login,
    .signup {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      text-align: center;
      padding: 1rem 2rem;
      background-color: #fff;
      border-radius: 10px;
      &::-webkit-scrollbar {
        display: none;
      }
      .title {
        font-family: sans-serif;
        font-weight: 550;
        color: #000;
        font-size: 1.875rem;
        width: 100%;
      }
      .description {
        color: rgba(107, 114, 128, 1);
        line-height: 2.5rem;
        font-size: 0.97rem;
        width: 100%;
      }
      form {
        width: 100%;
        p {
          text-align: left;
          color: rgba(107, 114, 128, 1);
          font-size: 0.9rem;
          line-height: 2rem;
          width: 100%;
          margin-top: 0.5rem;
        }
        .input {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0.5rem;
          border-radius: 7px;
          border: 1px solid #eee;
          &:focus-within {
            border-color: #10b981;
          }
          input {
            flex: 1;
            margin-left: 0.5rem;
            font-size: 0.9rem;
            color: rgba(107, 114, 128, 1);
            &::placeholder {
              color: rgba(107, 114, 128, 0.3);
            }
            .dark-icon {
              width: 12px;
              height: 12px;
            }
          }
        }
        .action {
          border: none;
          margin: 0.5rem 0;
          padding: 0.7rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .remember {
            .switch {
              position: relative;
              display: inline-block;
              width: 60px;
              height: 25px;
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #ccc;
              transition: 0.4s;
            }
            .slider:before {
              position: absolute;
              top: 4px;
              left: 5px;
              content: "";
              height: 17px;
              width: 17px;
              background-color: white;
              transition: 0.4s;
            }
            input:checked + .slider {
              background-color: #10b981;
            }
            input:checked + .slider:before {
              transform: translateX(30px);
            }
            .slider.round {
              border-radius: 34px;
            }
            .slider.round:before {
              border-radius: 50%;
            }
          }
          .forgot-password {
            color: #000;
            text-decoration: underline;
            font-size: 0.9rem;
            transition: 0.25s;
            &:hover {
              text-decoration: none;
            }
          }
        }
        .submit {
          button {
            display: block;
            width: 100%;
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
      small {
        display: block;
        margin: 1rem;
        font-size: 1rem;
        text-transform: uppercase;
      }
      .others {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        @media (max-width: 1024px) {
          grid-template-columns: repeat(1, 1fr);
        }
        .facebook,
        .google {
          background-color: rgba(243, 244, 246, 1);
          padding: 1rem;
          color: rgba(75, 85, 99, 1);
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          transition: 0.25s;
          border-radius: 7px;
          @media (max-width: 1024px) {
            justify-content: center;
          }
          cursor: pointer;
          &:hover {
            color: #fff;
            .icon {
              path {
                fill: #fff;
              }
            }
          }
          .icon {
            width: 16px;
            height: 18px;
            margin-right: 0.5rem;
            path {
              fill: rgba(75, 85, 99, 1);
            }
          }
        }
        .facebook {
          &:hover {
            background-color: rgba(37, 99, 235, 1);
          }
        }
        .google {
          &:hover {
            background-color: rgba(239, 68, 68, 1);
          }
        }
      }
      .suggest {
        margin: 1rem 0;
        color: rgba(107, 114, 128, 1);
        font-size: 0.85rem;
        span {
          font-size: 1rem;
          color: #000;
          font-weight: 600;
          cursor: pointer;
          margin-left: 0.5rem;
          &:hover {
            color: #10b981;
          }
        }
      }
    }
  }
}
</style>
