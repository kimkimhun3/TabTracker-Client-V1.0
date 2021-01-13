<template>
  <v-card>
    <v-system-bar></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
      </div>
    </v-toolbar>
    <v-banner
      single-line
      :sticky="sticky"
    >
      We can't save your edits while you are in offline mode.

      <template v-slot:actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Get Online
        </v-btn>
      </template>
    </v-banner>
    <v-card-text class="grey lighten-4">
      <v-sheet max-width="1000" height="300" class="mx-auto">
          <slot>No Slot Define</slot> 
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props:[
        'title'
    ]
}
</script>