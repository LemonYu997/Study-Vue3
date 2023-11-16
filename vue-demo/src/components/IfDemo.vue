<template>
    <h1>条件渲染</h1>
    <p>v-if 条件性的渲染某一内容，只有指令的表达式返回为真时才会被渲染</p>
    <div v-if="flag">if 能看见吗</div>
    <div v-else>else 能看见吗</div>
    <br>

    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else="D">Not A/B/C</div>
    
    <p>v-show 功能和 v-if 一致</p>
    <div v-show="flag">show 能看见吗</div>
    <p>v-if 是真实渲染，组件会被销毁和重建，开销很高。v-show 只是修改CSS的display属性，开销低</p>
</template>

<script>

export default {
    data() {
        return {
            flag: false,
            type: "B"
        }
    }
}

</script>