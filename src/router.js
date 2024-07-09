import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/home.vue'
import Login from './components/login.vue' // 确保路径正确

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  // 你可以在这里添加更多的路由
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
