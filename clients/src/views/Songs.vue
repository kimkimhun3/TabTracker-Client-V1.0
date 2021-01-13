<template>
  <v-card max-width="800" class="mx-auto">
    <v-app-bar dark color="dark">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>My Music</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="navigateTo({name: 'songs-create'})">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-container>
      <SongSearchPanel />
      <v-row dense>
        <v-col v-for="song in songs" :key="song.id" cols="12">
          <v-card color="#385F73" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline">{{song.title}}</v-card-title>
                <v-card-subtitle>{{song.artist}}</v-card-subtitle>
                <v-card-actions>
                  <v-btn @click="navigateTo({name: 'song', params: {songId: song.id}})"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="song.albumImageUrl"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>


import SongServices from '../services/SongServices'
import SongSearchPanel from '../views/SongSearchPanel'
export default {

    components:{
      SongSearchPanel

    },

    data (){
        return {
            songs: null
        }
    },
    async mounted() {
      this.songs = (await SongServices.index()).data  
    },
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    }
    
}
</script>