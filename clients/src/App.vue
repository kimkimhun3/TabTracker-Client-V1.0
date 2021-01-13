<template>
  <div id="app">
    <v-app>
      <Header/>

      <main>
        <v-container >
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>        

    
  </div>  
</template>

<script>

import Header from './views/Header'
export default {
  name: 'app',
  components:{
    Header
  }
}
</script>

