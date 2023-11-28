<template>
  <div class="py-3">
    <form class="login">
      <h3>Register Page</h3>
      <hr />
      <div>
        <input
          type="text"
          placeholder="First Name"
          v-model="registerData.fname"
          class="form-control mb-3"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Last Name"
          v-model="registerData.lname"
        />
      </div>
      <div>
        <input
          type="email"
          class="form-control mb-3"
          placeholder="Email"
          v-model="registerData.email"
        />
      </div>
      <div>
        <input
          type="password"
          class="form-control mb-3"
          placeholder="Password"
          v-model="registerData.password"
        />
      </div>
      <div class="py-2">
        <button
          type="button"
          class="btn btn-primary"
          v-on:click="registerDemo()"
        >
          Login
        </button>
      </div>
      <div>
        <router-link to="/Login">Allreday Register user click here</router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Register-Page",
  data() {
    return {
      registerData: {
        fname: "",
        lname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    registerDemo() {
      console.log("logindata", this.registerData);
    },
  },
};
</script>
<style></style>
