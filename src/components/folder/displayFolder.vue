<template>
  <v-layout row justify-center>
    <v-flex xs12 sm11>

      <v-btn  v-on:click=" openCreateDialog()" icon>
        <v-icon>add_circle</v-icon>
      </v-btn>

      <v-layout row wrap >
  
        <v-hover v-for="(folder, index) in folders"
        v-bind="folders"
        :key="index">

          <v-card 
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="ma-2 pa-1 card-folder"
          v-ripple="{ center: true }"
          >
 
            <v-card-header class="header-folder" @click="onFolder(folder)">
              <v-avatar>
                <v-icon class='orange lighten-1 white--text'>folder</v-icon>
              </v-avatar>
              
            </v-card-header>

            <v-card-content class="title-folder" @click="onFolder(folder)">
              <v-card-title>{{ folder.name}}</v-card-title>
            </v-card-content>

            <v-card-actions class="btn-more">
              <v-speed-dial direction="bottom">
                <template v-slot:activator>
                  <v-btn flat icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
              <v-btn
              flat icon
              color="green"
              v-on:click=" openEditDialog(folder)"
              >
                <v-icon>edit</v-icon>
              </v-btn>
        
              <v-btn
                flat icon color="error"
                v-on:click=" openDeleteDialog(folder)"
              >
                <v-icon>delete</v-icon>
              </v-btn>
              </v-speed-dial>
            </v-card-actions>
          </v-card>
        </v-hover>
      
      </v-layout>
       
    
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

     onFolder(folder){
      this.keepFolder(folder);
      this.$emit('clicked', true)
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
.card-folder{
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
.header-folder{
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
.title-folder{
  display: flex;
  justify-content: center;
}

</style>
