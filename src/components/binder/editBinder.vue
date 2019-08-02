<template>

  <v-card>

    <v-toolbar dark color="green">
      <v-toolbar-title>
        Modifier {{ targetBinder.name }}
      </v-toolbar-title>
    </v-toolbar>
    
    <v-container>

      <v-form
        lazy-validation
        @submit.prevent="editBinderSubmit"    
      >
        
        <v-text-field
          v-model="name"
          label="Nom"
          required
          prepend-icon="class"
        ></v-text-field>

        <v-text-field
          v-model="description"
          label="Description"
          required
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

import { mapState, mapActions } from 'vuex';

export default {

    computed: {
    ...mapState([
      'targetBinder'
    ]),
  },
  
  data: () => {
    
    return{
      name:this.targetBinder.name,
      description: this.targetBinder.description,
    }
  },
  


  
  beforeUpdate(){
    this.name= this.targetBinder.name
    this.description= this.targetBinder.description
  },
  
  methods: {
    ...mapActions([
      'editBinder',
      'loadBinders'
    ]),

   
    editBinderSubmit(){ 
      const name = this.name
      const description = this.description
     
      let editedBinder = {name, description}
      this.editBinder(editedBinder)
      
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