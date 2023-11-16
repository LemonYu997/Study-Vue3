<template>
    <h1>事件处理</h1>
    <p>使用 v-on 指令（简写为@）监听DOM事件，可以使用内联事件处理器或者方法事件处理器</p>
    <button v-on:click="count++">Add-内联事件处理器</button>
    <p>{{ count }}</p>
    <button v-on:click="addCount">Add-方法事件处理器</button>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            addCount() {
                // console.log("点击了");
                //读取data中的数据
                this.count++;
            }
        }
    }
</script>