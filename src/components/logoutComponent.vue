<template>

<v-btn @click="logout">logout</v-btn>
 
</template>

<script>

import { mapActions } from 'vuex';

    
export default{

  methods: {
    ...mapActions([
      'logout'
    ])
  }

}
</script>
   