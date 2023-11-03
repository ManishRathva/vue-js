<template>
 <h1>Hello manish About that you</h1>
 <h2>Email {{ email  }}</h2>
 <h2>Name {{ Name }}</h2>
 <h2>Mo.No {{ Mobile  }}</h2>
 <h2>Role {{ Role}}</h2>
 <h5>My name {{ myName("Manish bhai Rathva") }}</h5>
 <h4>full name {{ getName("Manu")  }}</h4>
 <h4>first Name {{ getData().name}}</h4>
 <div class="btn">
    <button class="btn1" v-on:click="tested()">Submit</button>
 </div>
 <p>{{ count }}</p>

 <h1 v-bind:class="vueClass">Patil</h1>
<form>
  <label>email:</label>
  <input v-model="email" type="text"><br>
  <br>
  <label>lname:</label>
  <input v-model="Name" type="text"><br>
  <br>
  <button v-on:click="clickMe()" type="button">Get Data</button>
</form>

</template>

<script>
export default {
  name: 'AboutData',
  data(){
    return{
        email:null,
        Name:null,
        Mobile:123456789,
        Role:'Admin',
        count:0,
        vueClass:'vueClass',
        myName(name){
        return name;
       }
    }
  },
  methods:{
    getName(fullname){
        return fullname;
    },
    getData(){
        return{
            name:'Manish',
            lastname:'Rathva'
        }
    },
    tested(){
     this.count = this.count+1;  
    },
    clickMe(){
      console.warn("get data",this.email,this.Name)
    }
  }

}
</script>

<style scoped>
*{
    text-align: center;
}
.btn{
    align-items: center;
    justify-content: center;
}
.btn1{
    padding:0.5rem;
    background-color: green;
    color: white;   
    font-size:17px;
    border:1px solid black;
    border-radius: 19px;
}
h1{
    color: red;
}

.vueClass{
    background-color: yellow;
}

</style>