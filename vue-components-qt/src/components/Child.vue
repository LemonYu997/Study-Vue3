<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ demo }}</p>
    <p>{{ age }}</p>
    <ul>
        <li v-for="(item, index) in names" :key="index">{{ item }}</li>
    </ul>
    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    //接收父级组件传来的数据
    props: ["title", "demo", "age", "names", "userInfo"]
}
</script>