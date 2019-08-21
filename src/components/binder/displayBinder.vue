<template>
    <v-layout row justify-center>
        <v-flex xs12 sm11>
            
            <v-btn  v-on:click=" openCreateDialog()" icon>
        <v-icon>add_circle</v-icon>
      </v-btn>

      <v-layout row wrap >
  
        <v-hover v-for="(binder, index) in targetFolder.binders"
        v-bind="binder"
        :key="index">

          <v-card 
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="ma-2 pa-1 card-binder"
          v-ripple="{ center: true }"
          
          >
 
            <div class="header-binder" @click="onBinder(binder)">
              <v-avatar>
                <v-icon class='green lighten-1 white--text'>class</v-icon>
              </v-avatar>
              
            </div>

            <div @click="onBinder(binder)">
              <v-card-title class="green--text">{{ binder.name}} </v-card-title>
              <v-card-text class="grey--text">{{ binder.description}} </v-card-text>
            </div>
            
                
          

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
              v-on:click=" openEditDialog(binder)"
              >
                <v-icon>edit</v-icon>
              </v-btn>
        
              <v-btn
                flat icon color="error"
                v-on:click=" openDeleteDialog(binder)"
              >
                <v-icon>delete</v-icon>
              </v-btn>
              </v-speed-dial>
            </v-card-actions>
          </v-card>
        </v-hover>
      
      </v-layout>
      
            <v-dialog v-model="dialogCreate" max-width="490">
                <createBinder @clicked="onClickChild"/>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="280">
                <deleteBinder @clicked="onClickChild"/>
            </v-dialog>
            <v-dialog v-model="dialogEdit" max-width="490">
                <editBinder @clicked="onClickChild"/>
            </v-dialog>

        </v-flex>
    </v-layout>
  
</template>

<script>
import { mapState, mapActions } from 'vuex';
import createBinder from '../binder/createBinder';
import deleteBinder from '../binder/deleteBinder';
import editBinder from '../binder/editBinder';

export default {

    components: {
        createBinder,
        deleteBinder,
        editBinder,
    },

    data: () => {
        return {
             dialogCreate: false,
             dialogDelete:false,
             dialogEdit:false,
        }
    },

    computed: {
        ...mapState([
            'targetFolder',
        ]),
    },

    methods:{
        ...mapActions([
            'keepBinder'
        ]),

        onClickChild (value) {
            this.dialogCreate= value
            this.dialogDelete= value;
            this.dialogEdit= value;
        },

        targetBinder(binder){
        this.keepBinder(binder);
        },

        openCreateDialog(){
        this.dialogCreate= true;
        },

        openDeleteDialog(binder){
        this.targetBinder(binder);
        this.dialogDelete= true;
        },
        openEditDialog(binder){
        this.targetBinder(binder);
        this.dialogEdit= true;
        },
        onBinder(binder){
        this.keepBinder(binder);
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
