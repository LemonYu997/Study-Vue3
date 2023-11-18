import { createApp } from 'vue'
import App from './App.vue'
//引入路由
import router from "./router"

const app = createApp(App)

//使用路由
app.use(router)

app.mount('#app')
