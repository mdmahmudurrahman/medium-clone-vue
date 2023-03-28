import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
// import McvRegister from '@/views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: 'McvRegister'
  // }
]
  
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
