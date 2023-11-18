<template>
    <h1>关于页面</h1>
    <!-- 二级路由展示 -->
    <router-link to="/about/us">关于我们</router-link> | 
    <router-link to="/about/info">关于信息</router-link>
    <router-view></router-view>
</template>

<script>

export default {
    
}

</script>