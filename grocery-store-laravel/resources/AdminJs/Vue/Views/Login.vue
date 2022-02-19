<template>
  <div class="global-container">
    <div class="card login-form">
      <div class="card-body">
        <h3 class="text-center">Log in</h3>
        <!--
			<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> -->
        <form>
          <!-- to error: add class "has-danger" -->
          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              class="form-control form-control-sm"
              aria-describedby="emailHelp"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <router-link
              :to="{ name: 'ForgotPassword' }"
              style="float: right; font-size: 12px"
              >Forgot password?</router-link
            >
            <input
              type="password"
              class="form-control form-control-sm"
              v-model="password"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-block"
            @click.prevent="login({ email, password })"
          >
            Sign in
          </button>
          <div class="sign-up">
            Don't have an account?
            <router-link :to="{ name: 'Signup' }">Create one</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
