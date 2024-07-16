import { createRouter, createWebHistory } from 'vue-router'
import MemberLevel from './components/memberlevel.vue'
import GetScore from './components/getScore.vue'
const routes = [
  {
    path: '/',
    name: 'MemberLevel',
    component: MemberLevel
  },
  {
    path: '/invite',
    name: 'GetScore',
    component: GetScore
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
