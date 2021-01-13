<template>
  <v-card>
    <v-system-bar></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title>Login Page</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text class="grey lighten-4">
<form name="tab-tracker-form" >
    <v-text-field
      v-model="email"
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      type="password"
      label="Password"
      v-model="password"
      autocomplete="new-password"
    ></v-text-field>
    <v-btn
      class="mr-4"
      @click="login"
    >
      Login
    </v-btn>
    <br>
    <div class="danger-alert" v-html="error" />
  </form>
    </v-card-text>
  </v-card>
</template>


<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Songs'
        })
      } catch (error) {
        this.errorSSSSSSSSSSSSS0 = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>