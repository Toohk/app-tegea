<template>

  <v-card>

    <v-toolbar dark color="orange">
      <v-toolbar-title>
        Ajouter un dossier
      </v-toolbar-title>
    </v-toolbar>
    
    <v-container>

      <v-form
        lazy-validation
        @submit.prevent="createFolderSubmit"
      >
      
        <v-text-field
          v-model="name"
          label="Nom"
          required
          prepend-icon="folder"
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
import { mapActions } from 'vuex';


export default {

  data: () => {
    return{
      name:'',
    }
  },

  methods: {
    ...mapActions([
      'createFolder',
    ]),
   
    createFolderSubmit(){
      this.createFolder(this.name)
      .then(() => { 
        this.$emit('clicked', false)
        this.name='';
      })
    },
  }
}


</script>

<style>

</style>
