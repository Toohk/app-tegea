<template>
    <v-layout row justify-center>
        <v-flex xs12 sm11>
            <h1 class='green--text'>{{targetBinder.name}}</h1>
            <h3 class='grey--text'>{{targetBinder.description}}</h3>

            
            <div v-for="(market, i) in targetBinder.markets" v-bind:key="i">
              
              <displayResult v-bind:achieve="targetBinder.tables.quantitative_sales.achieve.tabs[i]" v-bind:forecast="targetBinder.tables.quantitative_sales.forecast.tabs[i]" />
             
            </div>
            

      <v-layout row wrap >
  
        <v-hover>
          <v-card 
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="ma-2 pa-1 card-binder"
          v-ripple="{ center: true }"
          
          >
 
            <div class="header-binder" @click="onTable('forecast_sales')">
              <v-avatar>
                <v-icon class='blue lighten-1 white--text'>list_alt</v-icon>
              </v-avatar>
              
            </div>

            
            
                
          </v-card>
        </v-hover>
      
      </v-layout>

        </v-flex>
    </v-layout>
  
</template>

<script>
import { mapState} from 'vuex';
import displayResult from '../table/displayResult';

export default {

    components: {
      displayResult,

    },

    data: () => {
        return {
          i:''
        }
    },

    computed: {
        ...mapState([
            'targetBinder',
        ]),
    },

    methods:{

      onTable(){
        this.$emit('clicked', true)
      },

    }
    
    
}
</script>

<style>
.card-binder{
  min-width: 180px;
  max-width: 180px;
  min-height: 140px;
  display: grid;
}
.btn-more{
  position: absolute;
  right : 0px;
  top: 0px;
}
.header-binder{
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
.v-card__title{
    padding: 16px 16px 16px;
    display: flex;
  justify-content: center;
    
}
.v-card__text{
    display: flex;
  justify-content: center;
    padding: 0px 16px 16px;
}

</style>