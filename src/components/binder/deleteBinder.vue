<template>

  <v-card>

    <v-toolbar dark color="error">
      <v-toolbar-title>
        Supprimer {{ targetBinder.name }} ?
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
          @click="deleteBinderSubmit"
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
      'targetBinder'
    ])
  },

  methods: {
    ...mapActions([
      'clearData',
      'deleteBinder',
    ]),

    cancel(){
         this.$emit('clicked', false)
    },
   
    deleteBinderSubmit(){
      this.deleteBinder()
      .then(() => { 
         this.$emit('clicked', false)
      })
    },
  }
}


</script>

<style>

</style>
