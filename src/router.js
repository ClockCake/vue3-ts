import { createRouter, createWebHistory } from 'vue-router'
import MemberLevel from './components/memberlevel.vue'

const routes = [
  {
    path: '/',
    name: 'MemberLevel',
    component: MemberLevel
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
