<template>
  <v-card>
    <v-system-bar></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title>Register Page</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text class="grey lighten-4">
      <Panel title="Register"> 
        <form name="tab-tracker-form" autocomplete="off">
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
          <v-btn class="mr-4" @click="register">Register</v-btn>
          <br>
          <div class="danger-alert" v-html="error" />
        </form>
      </Panel>
    </v-card-text>
  </v-card>
</template>


<script>
import AuthenticationService from '../services/AuthenticationService'
import Panel from  '../views/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Login'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
      components:{
        Panel
        }
  }

}
</script>

<style scoped>
</style>
