<template>
    <h3>ComponentA</h3>
    <p>props组件间传递数据的类型校验</p>
    <ComponentB :title="title" />
</template>

<script>

import ComponentB from "./ComponentB.vue"


export default {
    data() {
        return {
            title: "字符串标题",
            names: ["zhangsan", "lisi", "wnagwu"]
        }
    },
    components: {
        ComponentB
    }
}
</script>