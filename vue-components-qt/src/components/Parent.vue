<template>
    <h3>Parent</h3>
    <p>Props传递数据：父级组件可将数据传递给子级组件，还可以传递动态数据</p>
    <p>可以传递任意类型的数据，数字、对象、数组等</p>
    <Child :title="message" demo="测试" :age="age" :names="names" :userInfo="userInfo"/>
    <p><b>注意事项：Props传递数据只能从父级到子级，不能子级到父级</b></p>
</template>

<script>

import Child from "./Child.vue"

export default {
    data() {
        return {
            message: "动态数据",
            age: 22,
            names: ["张三", "李四", "王五"],
            userInfo: {
                name: "lemon",
                age:20
            }
        }
    },
    components: {
        Child
    }
}
</script>