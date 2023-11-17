<template>
    <h3>ComponentA</h3>
    <p>{{ message }}</p>
    <button @click="updateHandle">A组件——更新数据</button>
    <br>
</template>
<script>

export default {
    data() {
        return {
            message: "old value"
        }
    },
    //keep-alive 保活的组件不会被卸载
    beforeUnmount() {
        console.log("组件A卸载之前");
    },
    unmounted() {
        console.log("组件A卸载之后");
    },
    methods: {
        updateHandle() {
            this.message = "new value";
        }
    }
}

</script>
