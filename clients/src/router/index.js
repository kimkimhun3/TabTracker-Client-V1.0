import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Songs from '../views/Songs.vue'
import Panel from '../views/Panel.vue'
import CreateSong from '../views/CreateSong.vue'
import Index from '../views/ViewSong/Index.vue'
import EditSong from '../views/EditSong.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel
  },
  {
    path:'/songs/create',
    name: 'songs-create',
    component: CreateSong
  },
  {
    path:'/songs/:songId',
    name: 'song',
    component: Index
  },
  {
    path: '/songs/:songId/edit',
    name: 'song-edit',
    component: EditSong
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
