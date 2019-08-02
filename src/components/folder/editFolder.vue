<template>

  <v-card>

    <v-toolbar dark color="orange">
      <v-toolbar-title>
        Modifier {{ targetFolder.name }}
      </v-toolbar-title>
    </v-toolbar>
    
    <v-container>

      <v-form
        lazy-validation
        @submit.prevent="editFolderSubmit"       
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

import { mapState, mapActions } from 'vuex';

export default {
  
  data: () => {
    
    return{
      name: this.targetFolder.name, 
    }
  },
  
  computed: {
    ...mapState([
      'targetFolder'
    ])
  },
  
  beforeUpdate(){
    this.name= this.targetFolder.name;
  },
  
  methods: {
    ...mapActions([
      'editFolder',
      'loadFolders'
    ]),
   
    editFolderSubmit(){ 
      this.editFolder(this.name)
      .then(() => { 
        this.$emit('clicked', false)
      });
    },

    cancel(){
      this.$emit('clicked', false)
    },
  }
}


</script>

<style>

</style>
