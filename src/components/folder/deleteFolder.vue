<template>

  <v-card>

    <v-toolbar dark color="error">
      <v-toolbar-title>
        Supprimer {{ targetFolder.name }} ?
      </v-toolbar-title>
    </v-toolbar>
    
    <v-container>

      <v-card-actions>
          
        <v-btn
          color="info"
          @click="cancel"
        >
          Annuler
        </v-btn>
        
        <v-btn
          color="error"
          @click="deleteFolderSubmit"
        >
          Supprimer
        </v-btn>

      </v-card-actions>

    </v-container>

  </v-card>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {

 computed: {
    ...mapState([
      'targetFolder'
    ])
  },

  methods: {
    ...mapActions([
      'clearData',
      'deleteFolder',
    ]),

    cancel(){
         this.$emit('clicked', false)
    },
   
    deleteFolderSubmit(){
      this.deleteFolder()
      .then(() => { 
        this.clearData();
         this.$emit('clicked', false)
      })
    },
  }
}


</script>

<style>

</style>
