<template>
    搜索：<input type="text" v-model="search">
</template>

<script>

export default {
    data() {
        return {
            search: ""
        }
    },
    //侦听器
    watch: {
        //输入值变化时调用自定义事件传给父组件
        search(newValue, oldValue) {
            //注册自定义事件
            this.$emit("SearchEvent", newValue)
        }
    }
}

</script>