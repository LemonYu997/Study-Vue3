import { createApp } from 'vue'
import App from './App.vue'

//全局引用
import axios from "axios"

const app = createApp(App)

//axios挂载到全局
app.config.globalProperties.$axios = axios

app.mount('#app')
