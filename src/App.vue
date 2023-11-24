<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <About/> -->
  <!-- <Parent/> -->
  <!-- <Form/> -->
  <Home/>
  <Test/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import About from './components/About.vue'
// import Parent from './components/Parent.vue'
// import Form from './components/Form.vue'
import Test from './components/Test.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // About,
    // Parent,
    // Form,
    Home,
    Test
  } 
}
</script>

<style scoped>
  *{
    text-align: center  ;
  }
</style>
