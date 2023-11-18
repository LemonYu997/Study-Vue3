<template>
    <h1>新闻</h1>
    <ul>
        <!-- 路由配置了路径传递参数 :name -->
        <li><router-link to="/news/details/百度">百度新闻</router-link></li>
        <li><router-link to="/news/details/网易">网易新闻</router-link></li>
        <li><router-link to="/news/details/头条">头条新闻</router-link></li>
    </ul>
</template>