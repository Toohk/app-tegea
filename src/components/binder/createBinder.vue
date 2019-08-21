<template>

  <v-card>

    <v-toolbar dark color="green">
      <v-toolbar-title>
        Créer un classeur
      </v-toolbar-title>
    </v-toolbar>
    
    <v-container>

      <v-form
        lazy-validation
        @submit.prevent="createBinderSubmit"
      >
      
        <v-text-field
          v-model="binder.name"
          label="Nom"
          required
          prepend-icon="class"
        ></v-text-field>

        <v-text-field
          v-model="binder.description"
          label="Description"
          prepend-icon="tag"
        ></v-text-field>

        <v-card-actions>

          <v-spacer></v-spacer>
            
          <v-btn
            color="success"
            type="submit"
          >
            Valider
          </v-btn>
        </v-card-actions>
          
      </v-form>
    </v-container>
  </v-card>

</template>

<script>
import {mapActions } from 'vuex';

export default {

    data: () => {
    return{
      binder:{ 
        name:'',
        description:'',
      }
    }
  },
  
  methods: {
    ...mapActions([
      'createBinder'
    ]),

    createBinderSubmit(){
      this.createBinder(this.binder)
      .then(() => { 
         this.$emit('clicked', false)
         this.binder.name='';
         this.binder.description='';
      })
    },
  }
}


</script>

<style>

</style>
