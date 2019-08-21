<template>
    <v-layout row justify-center>
        <v-flex xs12 sm11>

            <v-card v-for="(tabAchieve, i) in targetBinder.tables.quantitative_sales.achieve.tabs" v-bind:key="tabAchieve._id">
                    <v-content>
                        <v-card-title><h4>{{targetBinder.markets[i].name}}</h4></v-card-title>
                        <v-btn flat icon @click="editMode(tab)"><v-icon>edit</v-icon></v-btn>
                        <v-btn flat icon @click="suppMarket(tabAchieve.market_id)"><v-icon>delete</v-icon></v-btn>
                        <v-divider></v-divider>
                        <v-list dense>
                            <v-list-tile v-for="(lineAchieve, index) in tabAchieve.lines" v-bind:key="lineAchieve._id">
                                <v-list-tile-content>{{months[index]}}</v-list-tile-content>
                                <v-list-tile-content class="align-end"><v-text-field type="number" v-bind:disabled="disabled" v-model="lineAchieve.volume"></v-text-field ></v-list-tile-content>
                                <v-list-tile-content class="align-end"><v-text-field type="number" v-bind:disabled="disabled" v-model="lineAchieve.price"></v-text-field ></v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                </v-content>
            </v-card>
      
           

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
            months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
            disabled: true,
        }
    },

    computed: {
        ...mapState([
            'targetBinder',
        ]),},
        

    methods:{
        ...mapActions([
            'editContentForecastTable',
            'deleteMarket'
        ]),
        editMode(tab_id){
            
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