<template>
    <h3>ComponentA</h3>
    <p>可以通过props和传递事件函数方式实现子组件数据传给父组件数据</p>
    <p>子元素传给父元素的数据：{{ message }}</p>
    <ComponentB title="标题" :onEvent="dataFn"/>
</template>


<script>

import ComponentB from "./ComponentB.vue";

export default {
    data() {
        return {
            message: ""
        }
    },
    components: {
        ComponentB
    },
    methods: {
        dataFn(data) {
            // console.log(data);
            this.message = data
        }
    }
}

</script>