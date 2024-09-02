import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/HomePage/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: 'Login'
  }
]

const router = new VueRouter({
  routes
})

export default router
