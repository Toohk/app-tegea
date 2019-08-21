<template>
  <v-layout row justify-center>
    <v-flex xs12 sm11>

      <v-card>
        <v-toolbar color="light-blue" dark>
                
          <v-toolbar-title>Mes dossiers</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn  v-on:click=" openCreateDialog()" icon>
            <v-icon>add_circle</v-icon>
          </v-btn>

        </v-toolbar>

        <v-list two-line subheader>
               
          <v-list-tile
            v-for="(folder, index) in folders"
            v-bind="folders"
            :key="index"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon class='orange lighten-1 white--text'>folder</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ folder.name}}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-flex row wrap="false">

                <v-btn icon ripple v-on:click=" openEditDialog(folder)">
                  <v-icon color="orange">create</v-icon>
                </v-btn>

                <v-btn icon ripple v-on:click=" openDeleteDialog(folder)"  >
                  <v-icon color="red">clear</v-icon>
                </v-btn>
                      
                <v-btn icon ripple v-on:click=" targetFolder(folder)"  >
                  <v-icon color="lighten-1">keyboard_arrow_right</v-icon>
                </v-btn>

              </v-flex>
            </v-list-tile-action>
                  
          </v-list-tile>
        </v-list>
      </v-card>
    
      <v-dialog v-model="dialogCreate" max-width="490">
        <createFolder @clicked="onClickChild"/> 
      </v-dialog>

      <v-dialog v-model="dialogDelete" max-width="280">
        <deleteFolder @clicked="onClickChild"/>
      </v-dialog>

      <v-dialog v-model="dialogEdit" max-width="490">
        <editFolder @clicked="onClickChild"/>
      </v-dialog>


    </v-flex>
  </v-layout>
</template>


<script>

import { mapState, mapActions } from 'vuex';
import createFolder from '../folder/createFolder';
import deleteFolder from '../folder/deleteFolder';
import editFolder from '../folder/editFolder';

 export default {
     
  components: {
    createFolder,
    deleteFolder,
    editFolder,
  },

  data: () => {  
    return {
      dialogCreate: false,
      dialogDelete: false,
      dialogEdit: false,
    }
  },
  computed: {
    ...mapState([
      'folders'
    ])
  },

  created() {  
    this.loadFolders();
  },
 
  methods: {

    ...mapActions([
      'keepFolder',
      'loadFolders'
    ]),
 
    onClickChild (value) {
        this.dialogCreate= value;
        this.dialogDelete= value;
        this.dialogEdit= value;
    },

    targetFolder(folder){
      this.keepFolder(folder);
    },

    openCreateDialog(){
      this.dialogCreate= true;
    },

    openDeleteDialog(folder){
      this.targetFolder(folder);
      this.dialogDelete= true;
    },
    
    openEditDialog(folder){
      this.targetFolder(folder);
      this.dialogEdit= true;
    },
  }
}
</script>

<style>

</style>
