<template>
    <v-layout row justify-center>
        <v-flex xs12 sm11>
    

      
           <createMarket/>

         

        </v-flex>
        
    </v-layout>
  
</template>

<script>
import { mapState, mapActions } from 'vuex';
import createMarket from './createMarket';

export default {

    components: {
      createMarket

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