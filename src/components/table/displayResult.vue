<template>
  <div class="app">
    <br>

      <v-card light max-width="500">
        {{forecast.market_id.name}}
        <apexcharts type="line" :options="chartOptions" :series="series"></apexcharts>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>prev</v-list-tile-content>
              <v-list-tile-content class="align-center">pourcent</v-list-tile-content>
              <v-list-tile-content class="align-end">real</v-list-tile-content>
            </v-list-tile>
            </v-list>
            
            </v-card>
              <v-expansion-panel >
            <v-expansion-panel-content>
            <template max-width="500" v-slot:header>
            <v-card light max-width="500">
            <v-divider></v-divider>
            </v-card>
            
            </template>
<v-card light max-width="500">
            
            <v-list dense>
              <v-list-tile v-for= "(line, i) in forecast.lines" v-bind:key="line.volume">
                <v-list-tile-content>{{line.volume*line.price}}</v-list-tile-content>
                  <v-list-tile-content class="align-center">
                    <span v-if="pourcents[i]!==null"> 
                      {{pourcents[i]}} % 
                      <v-icon v-if="pourcents[i]>0" color="green">trending_up</v-icon>
                      <v-icon v-if="pourcents[i]<0" color="red">trending_down</v-icon>
                      <v-icon v-if="pourcents[i]==0" color="yellow">trending_flat</v-icon>
                    </span>
                  </v-list-tile-content>
                <v-list-tile-content class="align-end">{{achieve.lines[i].volume*achieve.lines[i].price}}</v-list-tile-content>
              </v-list-tile>
          </v-list>
</v-card>
          </v-expansion-panel-content>
          </v-expansion-panel>
              
             
           
              
              
          
            
        
   
    </div>

</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { mapState, mapActions} from 'vuex';

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aou','sep','oct','nov','déc'],
          },
        },
        series: [{
          name: 'Prévision',
          data: []
        },
        {
          name: 'Réalisé',
          data: []
        }],
        pourcents:[],
        totals:[],
      }
    },
    props: ['achieve', 'forecast'],
    created() {
      const resultForecast = [];
        this.forecast.lines.forEach(function(line){
          resultForecast.push(line.volume*line.price)
        })
        this.series[0].data = resultForecast;
      const resultAchieve = [];
        this.achieve.lines.forEach(function(line){
          resultAchieve.push(line.volume*line.price)
        })
        this.series[1].data = resultAchieve;
        const results = [];
       const data2 = this.series[1].data
        this.series[0].data.forEach(function(data, i){
          if(data == 0 | data2[i] == 0){
            results.push(null)
          }else{
            results.push((((data2[i]-data)/data)*100).toFixed(1))
          }
        })
        this.pourcents = results
        
    },
    beforeUpdate() {
      const resultForecast = [];
        this.forecast.lines.forEach(function(line){
          resultForecast.push(line.volume*line.price)
        })
        this.series[0].data = resultForecast;
      const resultAchieve = [];
        this.achieve.lines.forEach(function(line){
          resultAchieve.push(line.volume*line.price)
        })
        this.series[1].data = resultAchieve;
         const results = [];
       const data2 = this.series[1].data
        this.series[0].data.forEach(function(data, i){
          if(data == 0 | data2[i] == 0){
            results.push(null)
          }else{
            results.push((((data2[i]-data)/data)*100).toFixed(1))
          }
        })
        this.pourcents = results
        
    },
    
    computed: {
        ...mapState([
            'targetBinder',
        ]),
    },
    methods: {
     test(){
       const results = [];
       const data2 = this.series[1].data
        this.series[0].data.forEach(function(data, i){
          if(data == 0 | data2[i] == 0){
            results.push(null)
          }else{
            results.push((((data2[i]-data)/data)*100).toFixed(1))
          }
        })
        this.pourcents = results
     }
      
    }
}
</script>
<style scoped>

</style>