import { createApp } from 'vue'
import App from './App.vue'
//完整引用element-plus
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css'
//引入字体图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

// app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.mount('#app')
