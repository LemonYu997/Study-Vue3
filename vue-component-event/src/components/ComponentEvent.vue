<template>
    <h3>组件事件</h3>
    <p>通过子元素自定义的事件，触发了父元素的事件</p>
    <p>父元素：{{ message }}</p>
    <Child @someEvent="getHandler"/>
    <br>
    <br>
    <p><b>组件之间传递数据的方案：</b></p>
    <p>父传子：props</p>
    <p>子传父：自定义事件 this.$emit</p>
</template>


<script>
import Child from "./Child.vue";

export default {
    data() {
        return {
            message: ""
        }
    },
    components: {
        Child
    },
    methods: {
        //通过子元素自定义的事件，触发了父元素的事件
        //接收到子元素传递过来的数据
        getHandler(data) {
            console.log("触发了", data);
            this.message = data
        }
    }
}

</script>