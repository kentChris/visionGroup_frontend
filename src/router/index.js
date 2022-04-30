import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Private from '../views/PrivateView.vue'
import Error from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/private',
    name: 'private',
    component: Private
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
