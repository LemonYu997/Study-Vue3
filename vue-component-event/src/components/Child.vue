<template>
    <h3>Child</h3>
    <p>使用 $emit 可以自定义事件，用来组件间传递数据</p>
    <p>可以子组件传给父组件</p>
    <button @click="clickEventHandler">传递数据</button>
</template>


<script>

export default {
    data() {
        return {
            msg: "Child数据!"
        }
    },
    methods: {
        clickEventHandler() {
            // console.log("test");

            //自定义事件，可以父组件调用该事件，达到数据传输的目的
            this.$emit("someEvent", this.msg)
        }
    }
}

</script>