<template lang="">
  <div class="py-5">
    <form class="login">
      <h3>Login Page</h3>
      <hr />
      <div>
        <input
          type="text"
          placeholder="Enter UserName"
          v-model="loginData.name"
          class="form-control mb-3"
        />
      </div>
      <div>
        <input
          type="password"
          class="form-control mb-3"
          placeholder="Enter Password"
          v-model="loginData.email"
        />
      </div>
      <div class="py-2">
        <button type="button" class="btn btn-primary" v-on:click="loginForm()">
          Login
        </button>
      </div>
      <div>
        <router-link to="/Register">New User Register here</router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login-Data",
  data() {
    return {
      loginData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    loginForm() {
      console.log("logindata", this.loginData);
    },
  },
};
</script>
<style>
.login {
  width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
}
.login,
form input {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
