import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
import router from './router' // 引入路由
import { setRem } from './utils/rem'

// 初始化
setRem()

// 监听窗口变化
window.addEventListener('resize', setRem)


const app = createApp(App)

app.use(router) // 使用路由
app.config.globalProperties.$axios = axios
app.use(ElementPlus)

app.mount('#app')