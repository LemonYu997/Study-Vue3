<template>
    <h1>侦听器</h1>
    <p>{{ message }}</p>
    <button @click="updateHandler">修改数据</button>
</template>


<script>

export default {
    data() {
        return {
            message: "hello"
        }
    },
    methods: {
        updateHandler() {
            this.message = "World"
        }
    },
    //监听器
    watch: {
        //方法名与要监听的属性名一致
        //newValue：改变之后的数值
        //oldValue：改变之前的数值
        message(newValue, oldValue) {
            //数据发生变化会自动执行
            console.log(newValue, oldValue);
        }
    }
}

</script>