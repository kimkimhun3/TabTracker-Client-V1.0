<template>

  <v-row >
    <v-flex cols="12" sm="10" md="8" lg="5" class="ml-1">
        <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="song.albumImageUrl"
    />
    
      <v-card-title>{{song.title}}</v-card-title>
    

    <v-card-subtitle class="pb-0">
      {{song.artist}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Album {{song.album}}</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
          color="orange" text
          :to="{
            name: 'song-edit', 
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
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
export default {
    props: [
        'song'
    ],
    methods: {
      navigateTo(route){
        this.$router.push(route)
        }
    }
}
</script>