<template>
  <div class="global-container">
    <div class="card login-form">
      <div class="card-body">
        <h3 class="text-center">Password Recovery</h3>
        <!--
			<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> -->
        <div class="small mb-3 text-muted">
          Enter your email address and we will send you a link to reset your
          password.
        </div>
        <form>
          <!-- to error: add class "has-danger" -->
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control form-control-sm"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Reset Password
          </button>
          <div class="sign-up">
            Have an account?
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
