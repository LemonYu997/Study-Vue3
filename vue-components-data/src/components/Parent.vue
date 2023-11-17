<template>
    <h3>Parent</h3>
    <!-- 原始方案，一层层向下传递，非常麻烦 -->
    <!-- <Child :title="title"/> -->
    <Child />
</template>

<script>

//父组件中引入子组件
import Child from "./Child.vue";

export default {
    components: {
        Child
    },
    // props: {
    //     title: {
    //         type: String
    //     }
    // }
}

</script>