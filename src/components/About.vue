<template>
 <h1>Hello manish tell me about you</h1>
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



<!--form through data get and console-->
<form>
  <label>email:</label>
  <input v-model="email" type="text"><br>
  <br>
  <label>lname:</label>
  <input v-model="Name" type="text"><br>
  <br>
  <button v-on:click="clickMe()" type="button">Get Data</button>
</form>
<p v-bind:style="{fontSize:size}">Manish Rathva</p>


<!--checkbox using bind data-->
<label for="java">Java</label>
<input type="checkbox" v-model="technology" id="java" value="java">
<br>
<label for="html">html</label>
<input type="checkbox" v-model="technology" id="html" value="html">
<br>
<label for="css">css</label>
<input type="checkbox" v-model="technology" id="css" value="css">
<br>
<p><b>technology</b></p>
{{ technology }}

<!--if - else condition example-->
<p v-if="show">Manish</p>
<p v-else>Rathva</p>
<button v-on:click="show=!show" class="btn btn-primary">toggle</button>

<!--For loop example-->
<div>
  <ol>
    <li v-for="userdata in user" :key="userdata">
        {{ userdata }}
    </li>
  </ol>

  <ol>
    <li v-for="usernadata in userdetails" :key="usernadata.id">
        id is a : {{ usernadata.id }} &nbsp;Name is a:  {{ usernadata.name }} &nbsp;Email is a : {{ usernadata.email }} 
    </li>
  </ol>
</div>

<form >
  <input type="text" v-model="form.email">
  <input type="text" v-model="form.password">
  <button v-on:click="submit">submit</button>
</form>
</template>

<script>
export default {
  name: 'AboutData',
  data(){
    return{
        show:true,
        email:null,
        Name:null,
        Mobile:123456789,
        Role:'Admin',
        count:0,
        vueClass:'vueClass',
        size:'80px',
        myName(name){
        return name;
       },
       technology:[],
       form:{
        email:'',
        password:''
       },
       user:['manish','pramod','ketan','patil'],
       userdetails:[
        {
          name:'manish',
          email:'m@gmail.com',
          id:1
        },
        {
          name:'pramod',
          email:'p@gmail.com',
          id:2
        },
        {
          name:'patil',
          email:'p@gmail.com',
          id:3
        }
       ],
    }
  },
  methods:{
    submit(){
      console.warn('yyyyyyyyyyyyyyy',this.form);
    },
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