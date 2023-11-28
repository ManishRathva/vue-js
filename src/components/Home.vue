<template lang="">
  <nav>
    <div class="navbar">
      <div>
        <h3>Restaurant</h3>
      </div>
      <div class="navbardetails mx-3">
        <div class="mx-3">
          <router-link to="Home" style="color: white; text-decoration: none"
            >Home</router-link
          >
        </div>
        <div class="mx-3">
          <router-link to="About" style="color: white; text-decoration: none"
            >About</router-link
          >
        </div>
        <div class="mx-3">
          <router-link to="Login" style="color: white; text-decoration: none"
            >Login</router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <!-- <div>
    <button type="button" v-on:click="getData()">click me</button>
  </div> -->
  <!-- 
  <div>
    <ul v-for="data in listData" :key="data.id">
      <li>{{ data.id }} {{ data.name }} {{ data.age }}</li>
    </ul>
  </div> -->
  <div class="py-3 mx-5">
    <table class="table table-bordered table-responsive">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr v-for="data in listData" :key="data.id">
        <td>{{ data.id }}</td>
        <td>{{ data.name }}</td>
        <td>{{ data.age }}</td>
      </tr>
    </table>
  </div>
  <h1 @click="showConfetti" class="text-center">🎉 Congratulations!</h1>
  <!-- <div>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Manish</td>
        <td>Ranip</td>
        <td>7777</td>
      </tr>
    </table>
  </div> -->
  <router-view></router-view>
  <!-- <div>
        <p>Working On Home Component</p>
        <P>Dynamic Components</P>
        <button @click="tab='Angular'">Load Angular</button>
        <button @click="tab='Java'">Load Java</button>
        <button @click="tab='Php'">Load Php</button>
        <java/>
        <Php/>
        <Angular/>
    </div> -->

  <!-- <component :is="tab"></component> -->
</template>
<script>
// import Java from './Java.vue'
// import Php from './Php.vue'
// import Angular from './Angular.vue'

import axios from "axios";
import JSConfetti from "js-confetti";
const confetti = new JSConfetti();
export default {
  name: "HOME",
  // components:{
  //     Java,Php,Angular
  // },
  data() {
    return {
      //   tab:'Java'
      listData: [],
    };
  },
  methods: {
    showConfetti() {
      confetti.addConfetti();
    },

    getData() {
      axios
        .get("http://localhost:3000/data")
        .then((response) => {
          this.listData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
}
.navbardetails {
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  color: white;
}
/* .table {
  border:1;
} */
</style>
