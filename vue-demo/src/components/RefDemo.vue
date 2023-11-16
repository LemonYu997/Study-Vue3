<template>
    <h1>模板引用</h1>
    <p>如果需要直接访问DOM元素，可以使用特殊的 ref 属性，挂载结束后会被暴露在 this.$refs </p>
    <div class="container" ref="container">{{ content }}</div>
    <input type="text" ref="username">
    <button @click="getElemntHandle">获取元素</button>
</template>
<script>

/**
 * 内容改变：{{ 模板语法 }}
 * 属性改变：v-bind:指令
 * 事件：v-on:事件类型
 * 
 * 获取DOM元素：this.$refs
 * 没有特别的需求，不要操作DOM
 */
export default {
    data() {
        return {
            content: "内容"
        }
    },
    methods: {
        getElemntHandle() {
            //innerHTML 原生JS属性
            console.log(this.$refs.container.innerHTML = "hahaha");;
            console.log(this.$refs.username.value);
        }
    }
}

</script>