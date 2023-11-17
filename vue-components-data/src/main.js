import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//可以全局提供数据，所有组件可用
app.provide("globalData", "我是全局数据")

app.mount('#app')
