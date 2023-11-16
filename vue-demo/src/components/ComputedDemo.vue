<template>
    <h1>计算属性</h1>
    <h3>{{ myData.name }}</h3>
    <p>普通写法显得html中很臃肿，不易读，使用计算属性</p>
    <!-- <p>{{ myData.content.length > 0 ? 'yes' : 'no' }}</p> -->
    <p>{{ myContent }}</p>
    <p>{{ myContent }}</p>
    <p>{{ myContent }}</p>
    <p>{{ myContent }}</p>
    <p>计算属性和函数方法相比，计算属性会基于其响应式依赖被缓存（多次调用只会算一次），只有在更新时才回重新计算</p>
    <p>方法总是会在重渲染发生时再次执行</p>
    <p>{{ myContentMethod() }}</p>
    <p>{{ myContentMethod() }}</p>
    <p>{{ myContentMethod() }}</p>
    <p>{{ myContentMethod() }}</p>
</template>


<script>

export default {
    data() {
        return {
            myData: {
                name: "myData",
                content: ["张三", "李四", "王五"]
            }
        }
    },
    //计算属性
    computed: {
        myContent() {
            return this.myData.content.length > 0 ? 'yes' : 'no';
        }
    },
    //函数方法
    methods: {
        myContentMethod() {
            return this.myData.content.length > 0 ? 'yes' : 'no';
        }
    }
}

</script>