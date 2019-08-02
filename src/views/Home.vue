<template>

<v-app>

<v-navigation-drawer dark
      v-model="drawer"
      app
    >
    
      
</v-navigation-drawer>

 <v-toolbar>
   <v-btn fat icon @click.stop="drawer = !drawer"><v-icon>list</v-icon></v-btn>
   <v-toolbar-title>
     Home
     <logoutComponent/>
     <v-btn
        flat
        @click="prev"
      >
        <v-icon>reply</v-icon>
      </v-btn>
     
   </v-toolbar-title>
 </v-toolbar>
 

<v-window v-model="onboarding">

      <v-window-item>
        <v-container>
          <displayFolder @clicked="next"/>
        </v-container>
      </v-window-item>

      <v-window-item>
        <v-container>
          <displayBinder @clicked="next"/>
        </v-container>
      </v-window-item>

      <v-window-item>
          <v-container>
            <displayListTable @clicked="next"/>
        </v-container>
      </v-window-item>

      <v-window-item>
          <v-container>
            <displayTable/>
          </v-container>
      </v-window-item>

</v-window>



</v-app>
 
</template>

<script>

import logoutComponent from '../components/logoutComponent'
import displayFolder from '../components/folder/displayFolder'
import displayBinder from '../components/binder/displayBinder'
import displayListTable from '../components/table/displayListTable'
import displayTable from '../components/table/displayTable'
    
export default{

components: {
    logoutComponent,
    displayFolder,
    displayBinder,
    displayListTable,
    displayTable
  },

  data: () => ({
      length: 4,
      onboarding: 0,
      drawer: null
    }),
    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      }
    }
}
   
 
</script>
