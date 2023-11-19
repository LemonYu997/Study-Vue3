import { createApp } from 'vue'
import App from './App.vue'

//主文件中引入vuex
import Vuex from "./store"

const app = createApp(App)

app.use(Vuex)

app.mount('#app')
