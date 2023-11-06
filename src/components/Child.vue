<template>
    <h2><b>child component</b></h2>
    <!--props data parent to child get-->
    <p>{{ name }}</p>
    <h2>{{ username.name }} {{ username.sirname }}</h2>
    <p v-html="tag">
    </p>
    <button v-on:click="userdata(userName)">send user name</button>

</template>
<script>
export default {
    name:'ChildData',
    data(){
        return{
         tag:'<h1>patil brothers</h1>',
         userName:'manish rathvo'
        }
    },
    props:{
        name:String,
        username:Object,
        userdata:Function,
    },
    methods:{

    },

}
</script>

<style>
 *{
    text-align: center  ;
  }
</style>