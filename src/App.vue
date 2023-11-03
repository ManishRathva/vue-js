<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <About/>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    About,
  } 
}
</script>

<style scoped>
  *{
    text-align: center  ;
  }
</style>
