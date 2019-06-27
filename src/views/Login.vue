<template>

  <v-layout align-center justify-center row fill-height>
      <v-flex xs10 sm6 md4>
        <v-card>

          <v-toolbar dark color="primary">
            <v-toolbar-title>
              Se connecter
            </v-toolbar-title>
          </v-toolbar>
    
          <v-container>

            <v-form
                ref="form"
                lazy-validation
                v-model="user"
                @submit.prevent="login"
            >
      
              <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                  prepend-icon="person"
              ></v-text-field>

              <v-text-field
                  v-model="password"
                :type="show ? 'text' : 'password'"
                  label="Mot de passe"

                  prepend-icon="lock"
              ></v-text-field>

              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn
                  color="success"
                  type="submit"
                  >
                    Connexion
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
    data () {
      return{
      user: {
        email:'',
        password:''
      }
    }
    },
    methods: {
      login(){
      
    axios.post('http://localhost:3000/api/user/login', {
      'email': this.email,
      'password': this.password
        },{
        headers: {'Content-Type': 'application/json'}
      })
    .then(response => { 
        console.log(response)
        const token = response.data
        console.log(token)
      localStorage.setItem('authtoken', token) // store the token in localstorage
     console.log(localStorage.authtoken)
      this.$router.push("/");
      })
      .catch(error => {
          console.log(error.response)
          localStorage.removeItem('authtoken') // if the request fails, remove any possible user token if possible
          reject(error)
      });
      
    }
    },
  }
</script>

<style>

</style>
