import { createApp } from 'vue'
import App from './App.vue'
import Header from './pages/Header.vue';

const app = createApp(App);

/**
 * 在createApp和mount中间添加需要全局注册的组件
 * 全局注册的问题：
 *  1、虽然注册但没有使用的组件在生产打包时无法被自动移除（tree-shaking）
 *  2、全局注册之后组件间的依赖关系没有那么明显，降低可维护性
 */
app.component("Header", Header);


app.mount('#app');