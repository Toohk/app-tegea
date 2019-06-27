<template>

  <v-layout align-center justify-center row fill-height>
      <v-flex xs10 sm6 md4>
        <v-card>

          <v-toolbar dark color="secondary">
            <v-toolbar-title>
              S'inscrire
            </v-toolbar-title>
          </v-toolbar>
    
          <v-container>

            <v-form
                ref="form"
                v-model="user"
                lazy-validation
                @submit.prevent="signUp"
            >
      
              <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                  prepend-icon="person"
              ></v-text-field>

              <v-text-field
                  v-model="password"
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  :type="show ? 'text' : 'password'"
                  label="Mot de passe"
                
                  @click:append="show = !show"
                  prepend-icon="lock"
              ></v-text-field>

              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn
                  color="success"
                  type="submit"
                  >
                    S'inscrire
                  </v-btn>
              </v-card-actions>
          
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>

import axios from 'axios';

export default {

  data: () => {
    return{
      show : false,
      user: {
        email:'',
        password:''
      }
    }
  },

  methods: {

    signUp(){
      
    axios.post('http://localhost:3000/api/user/signup', {
      'email': this.email,
      'password': this.password
        },{
        headers: {'Content-Type': 'application/json'}
      })
    .then(response => { 
        console.log(response)
        this.$router.push("/login");
      })
      .catch(error => {
          console.log(error.response)
      });
      
    }
  }
}
  
  
</script>

<style>

</style>
