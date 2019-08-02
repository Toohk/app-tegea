<template>
    <v-layout row justify-center>
        <v-flex xs12 sm11>
            <h1 class='green--text'>{{targetBinder.name}}</h1>
            <h3 class='grey--text'>{{targetBinder.description}}</h3>

      <v-layout row wrap >
  
        <v-hover>
          <v-card 
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="ma-2 pa-1 card-binder"
          v-ripple="{ center: true }"
          >
 
            <v-card-header class="header-binder" @click="onBinder(binder)">
              <v-avatar>
                <v-icon class='blue lighten-1 white--text'>list_alt</v-icon>
              </v-avatar>
              
            </v-card-header>

            <v-card-content @click="onBinder(binder)">
              <v-card-title class="blue--text"> CA Prévision </v-card-title>
            </v-card-content>
            
                
          </v-card>
        </v-hover>
      <v-hover>
          <v-card 
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="ma-2 pa-1 card-binder"
          v-ripple="{ center: true }"
          >
 
            <v-card-header class="header-binder" @click="onBinder(binder)">
              <v-avatar>
                <v-icon class='blue lighten-1 white--text'>list_alt</v-icon>
              </v-avatar>
              
            </v-card-header>

            <v-card-content @click="onBinder(binder)">
              <v-card-title class="blue--text"> CA Réalisé </v-card-title>
            </v-card-content>
            
                
          </v-card>
        </v-hover>
      </v-layout>
      
           

        </v-flex>
    </v-layout>
  
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {

    components: {

    },

    data: () => {
        return {

        }
    },

    computed: {
        ...mapState([
            'targetBinder',
        ]),
    },

    methods:{

    }
    
    
}
</script>

<style>


</style>