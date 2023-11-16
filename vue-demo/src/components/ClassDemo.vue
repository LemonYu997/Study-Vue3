<template>
    <h1>Class绑定</h1>
    <p>vue对class的绑定提供了增强功能，可以绑定字符串、表达式的值、对象或数组</p>
    <p :class="{'active': isActive, 'text-danger': hasError}">Class绑定表达式</p>
    <p :class="classObject">Class绑定对象</p>
    <p :class="[arrActive, arrHasError]">Class绑定数组</p>
    <p>在数组中使用三元运算符进行条件渲染</p>
    <p :class="[isActive ? arrActive : '']">Class绑定数组-三元</p>
    <p>数组和对象可以一起使用，注意只能数组嵌套对象[{}]</p>
    <p :class="[{'active': isActive}, arrHasError]">Class绑定数组和对象</p>

</template>


<script>

export default {
    data() {
        return {
            isActive: true,
            hasError: false,
            classObject: {
                'active': true,
                'text-danger': true
            },
            arrActive: "active",
            arrHasError: "text-danger"
        }
    }
}

</script>

<style>

.active {
    font-size: 30px;
}

.text-danger {
    color: red;
}

</style>