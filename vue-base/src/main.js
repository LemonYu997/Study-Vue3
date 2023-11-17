import { createApp } from 'vue'
import App from './App.vue'

//app：vue的实例对象
//每个项目有且只有一个Vue实例对象
const app = createApp(App)

//APP：根组件


//挂载应用
app.mount('#app')
