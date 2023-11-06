<template>
<form>
<label>Email</label>
<input type="text" v-model="form.email">
<button v-on:click="login">Submit</button>
</form>
</template>

<script>
export default{
    name:'formData',
    data(){
        return{
          form:{
            email:'',
          }
        }
    },
    methods:{
        login(){
            console.warn(this.form);
        }
    }
}
</script>

<style>

</style>