<template>

  <v-row >
      <song-metadata :song="song" />
      <v-flex>
        <Youtube :youtubeId="song.youtubeId"/>
      </v-flex>  

  <v-flex cols="13" sm="10" md="8" lg="5" class="ml-1">
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>{{song.lyric}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text 
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-flex>  

<v-flex cols="13" sm="10" md="8" lg="5" class="ml-1">
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>{{song.tab}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-flex>  




  <v-flex cols="13" sm="10" md="8" lg="5" class="ml-1">
  <v-card
    class="mx-auto"
    max-width="650"
  >
      <youtube
      :video-id="youtubeId"
      :player-width="650"
      :player-height="330">
    </youtube>
    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-flex>  

  </v-row>    
</template>


<script>
import SongServices from '../../services/SongServices';
import SongMetadata from './SongMetadata.vue';


export default {
  components: { SongMetadata},
    data (){
        return {
            song: {}
        }
    },
    async mounted() {
        const songId = this.$store.state.route.params.songId
        this.song = (await SongServices.show(songId)).data
        console.log(this.song)
        
    }
}
</script>