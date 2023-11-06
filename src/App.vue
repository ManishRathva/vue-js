<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <About/>
  <Parent/>
  <Form/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Parent from './components/Parent.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    About,
    Parent,
    Form,
  } 
}
</script>

<style scoped>
  *{
    text-align: center  ;
  }
</style>
