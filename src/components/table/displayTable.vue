<template>
    <v-layout row justify-center>
        <v-flex xs12 sm11>
    
           <createMarket/>
           <div>
    <v-tabs
      
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        ripple
      >
        Prévision
      </v-tab>

      <v-tab-item>
        <v-card v-for="tab in targetBinder.tables.quantitative_sales.forecast.tabs" v-bind:key="tab._id">
                    <v-content>
                        <v-card-title><h4>{{tab.market_id.name}}</h4></v-card-title>
                        <v-btn flat icon @click="editMode(tab)"><v-icon>edit</v-icon></v-btn>
                        <v-btn flat icon @click="suppMarket(tab.market_id)"><v-icon>delete</v-icon></v-btn>
                        <v-divider></v-divider>
                        <v-list dense>
                            <v-list-tile v-for="(line, index) in tab.lines" v-bind:key="line._id">
                                <v-list-tile-content>{{months[index]}}</v-list-tile-content>
                                <v-list-tile-content class="align-end"><v-text-field type="number" v-bind:disabled="disabled" v-model="line.volume"></v-text-field ></v-list-tile-content>
                                <v-list-tile-content class="align-end"><v-text-field type="number" v-bind:disabled="disabled" v-model="line.price"></v-text-field ></v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                </v-content>
            </v-card>
      </v-tab-item>
      <v-tab
        ripple
      >
        Réalisé
      </v-tab>
      <v-tab-item>
        <v-card v-for="tab in targetBinder.tables.quantitative_sales.achieve.tabs" v-bind:key="tab._id">
                    <v-content>
                        <v-card-title><h4>{{tab.market_id.name}} REALISER</h4></v-card-title>
                        <v-btn flat icon @click="editMode(tab)"><v-icon>edit</v-icon></v-btn>
                        <v-btn flat icon @click="suppMarket(tab.market_id)"><v-icon>delete</v-icon></v-btn>
                        <v-divider></v-divider>
                        <v-list dense>
                            <v-list-tile v-for="(line, index) in tab.lines " v-bind:key="line._id">
                                <v-list-tile-content>{{months[index]}}</v-list-tile-content>
                                <v-list-tile-content class="align-end"><v-text-field type="number" v-bind:disabled="disabled" v-model="line.volume"></v-text-field ></v-list-tile-content>
                                <v-list-tile-content class="align-end"><v-text-field type="number" v-bind:disabled="disabled" v-model="line.price"></v-text-field ></v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                </v-content>
            </v-card>
      </v-tab-item>
    </v-tabs>

  </div>

        </v-flex>
        
    </v-layout>
  
</template>

<script>
import { mapState, mapActions } from 'vuex';
import createMarket from './createMarket';


export default {

    components: {
      createMarket,

    },

    data: () => {
        return {
            months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
            disabled: true,
        }
    },

    computed: {
        ...mapState([
            'targetBinder',
        ]),
    },
   

    methods:{
        ...mapActions([
            'editContentTable',
            'deleteMarket'
        ]),
        editMode(){
            
            if(this.disabled == true){
                this.disabled = false
            }else{
                this.disabled = true
            }
        },
        suppMarket(market){
            this.deleteMarket(market);     
        },
           
    }

    }
    
    

</script>

<style>


</style>