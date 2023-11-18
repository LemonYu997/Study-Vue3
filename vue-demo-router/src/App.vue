<template>
  <div class="base">
    <!-- 路由跳转 -->
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">关于</router-link> | 
    <router-link to="/news">新闻</router-link>
    <!-- 路由的显示入口 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
    
  }
}

</script>

<style>

.base {
  padding: 10px;
  text-align: center;
  margin: 0 auto;
}

</style>