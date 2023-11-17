<template>
    <h3>透传 attribute / 属性继承 </h3>
    <!-- <p>随便多一个元素，透传就会失效</p> -->
</template>

<script>

export default {
    //禁用属性继承
    inheritAttrs: false
}

</script>

<style>

/* 该属性被自动添加 */
.attr-container {
    color: red;
}

</style>