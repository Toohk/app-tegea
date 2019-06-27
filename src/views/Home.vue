<template>
 <v-toolbar>
   <v-toolbar-title>
     Home
     <v-btn @click="logout">logout</v-btn>
   </v-toolbar-title>
 </v-toolbar>
</template>

<script>
 
import axios from 'axios';

/** 
     const authtoken = localStorage.authtoken;
      console.log(authtoken)
    
      axios.get('http://localhost:3000/api/posts', {
        'authtoken': authtoken,
   
        },{
        headers: {'Content-Type': 'application/json'}
      })
      
      
     
      .then(response => { 
        console.log(response)
       
      })
      .catch(error => {
          console.log(error.response)
      });
*/



   const authtoken = localStorage.authtoken;
axios.get('http://localhost:3000/api/posts', {
      headers: {
        'authtoken': authtoken
      },
      
      // maybe there is a way to stop ajax if cached
    })
      .then(response => { 
        console.log(response)
       
      })
      .catch(error => {
        
          console.log(error.response)
          this.$router.push("/login");
      });
    
export default{


  methods: {
    
    
  
    logout() {
      localStorage.removeItem("authtoken");
      this.$router.push("/login");
    }
  }

}
   
 
</script>
