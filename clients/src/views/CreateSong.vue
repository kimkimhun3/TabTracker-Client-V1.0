<template>
  <v-row >
    <v-flex cols="12" sm="10" md="8" lg="5" class="ml-1">
        <v-card ref="form">
            <v-card-text>
                <v-text-field 
                v-model="song.title"
                label="Title"
                placeholder="Title"
                required
                :rules="[required]"
                >
                </v-text-field>
                <v-text-field 
                v-model="song.artist"
                label="Artist"
                placeholder="Artist"
                :rules="[required]"
                required>
                </v-text-field>
                <v-text-field 
                v-model="song.genre"
                label="Genre"
                placeholder="Genre"
                :rules="[required]"
                required>
                </v-text-field>
                <v-text-field 
                v-model="song.album"
                label="Album"
                placeholder="Album"
                :rules="[required]"
                required>
                </v-text-field>
                <v-text-field 
                v-model="song.albumImageUrl"
                label="Album Image URL"
                placeholder="Album Image URL"
                :rules="[required]"
                required>
                </v-text-field>
                <v-text-field 
                v-model="song.youtubeId"
                label="Youtube ID"
                placeholder="Youtube ID"
                :rules="[required]"
                required>
                </v-text-field>      
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex cols="10" sm="10" md="8" lg="5" class="ml-1">
        <v-card ref="form">
            <v-row class="ml-1">
            <v-col cols="12">
                <v-textarea color="teal" label="Tab" v-model="song.tab" placeholder="Tab" :rules="[required]" required> 
                </v-textarea>
            </v-col>
            <v-col cols="12">
                <v-textarea color="teal" label="Lyrics" v-model="song.lyric" placeholder="Lyric" :rules="[required]" required>
                </v-textarea>
            </v-col>
            </v-row>
            <v-card-actions>
            <v-btn text>
                Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
                <v-tooltip v-if="formHasErrors" left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            class="my-0"
                            v-bind="attrs"
                            @click="resetForm"
                            v-on="on"
                        >
                        <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                    </template>
                    <span>Refresh form</span>
                </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
                color="primary"
                text
                @click="create"
                >
                Create
            </v-btn>
            </v-card-actions>
            <div class="error" v-if="error">{{error}}</div>
        </v-card>
    </v-flex>               
  </v-row>
  
</template>

<script>
import SongServices from '../services/SongServices'
export default {
    data (){
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyric: null,
                tab: null
            },
            required: (value) => !!value || 'Required.'
        }
    },  
    methods: {
        async create() {

            this.error = null
            const areAllFieldsFilledIn = Object.keys(this.song).every(key => !! this.song[key])
            if (!areAllFieldsFilledIn){
                this.error = 'Please fill in all the required fields.'
                return 
            }

            try{
                await SongServices.post(this.song)
                this.$router.push({
                    name: 'Songs'
                })
            }
            catch(err){
                console.log(err)

            }

        }
    }
}
</script>