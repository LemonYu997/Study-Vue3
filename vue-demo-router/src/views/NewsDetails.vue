<template>
    <!-- 详情页读取路由携带的参数，参数名应于 route/index.js 中配置的一致 -->
    <h1>新闻详情</h1>
    <p>{{ this.$route.params.name }}</p>
</template>