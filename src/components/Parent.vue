<template>
<h2><b>Parent to child data passing</b></h2>
<Child name="I am somthing" :username="user" :userdata="getData"/>
<h1>{{ chilusername }}</h1>
</template>

<script>
import Child from './Child.vue'
export default{
    name:'ParentData',
    components:{
     Child
    },
    data(){
        return{
            user:{
                name:'manu',
                sirname:'rabari'
            },
            chilusername:'',
        }
    },
    methods:{
        getData(name){
            this.chilusername = name;
        }
    }
}
</script>

<style>
</style>