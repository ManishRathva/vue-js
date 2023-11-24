<template lang="">
    <router-link to='Home'>Home</router-link><br>
    <router-link to='About'>About</router-link><br>
    <router-link to='Login'>Login</router-link><br>

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
export default {
    name:'HOME',
    // components:{
    //     Java,Php,Angular
    // },
    // data(){
    //     return{
    //         tab:'Java'
    //     }
    // }
}
</script>
<style lang="">
    
</style>