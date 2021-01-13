<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <!-- <v-btn @click="navigateTo({name: 'Home'})">TabTracker</v-btn> -->
      <span
      class="home" @click="navigateTo({name: 'Home'})">
      TabTracker
      </span>   
      <v-toolbar-title>
          <v-btn dark >
              Browse
          </v-btn>    
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn  @click="navigateTo({name: 'Register'})">Sign Up</v-btn>
      <v-btn  @click="navigateTo({name: 'Login'})">Login</v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>


<script>
export default {
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
.home{
    cursor: pointer;
}
.home:hover{
    color: red;
}
</style>