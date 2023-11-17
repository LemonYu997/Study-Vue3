<template>
    <h3>生命周期函数及其应用</h3>
    <p ref="name">通过refs获取DOM元素</p>
    <ul>
        <li v-for="(item, index) in banner" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </li>
    </ul>
</template>

<script>

export default {
    data() {
        return {
            banner: []
        }
    },
    //组件创建之后可以初始化数据，组件创建之前是获取不到 banner 的
    created() {
        //模拟网络请求
        this.banner = [{
            "title": "张三标题",
            "content": "张三内容"
        },
        {
            "title": "李四标题",
            "content": "李四内容"
        },
        {
            "title": "王五标题",
            "content": "王五内容"
        }]
    },
    //在渲染之前拿不到Dom元素
    beforeMount() {
        console.log(this.$refs.name);   //undefined
    },
    //在渲染后读取到Dom元素
    mounted() {
        console.log(this.$refs.name);//<p>通过refs获取DOM元素</p>
    }
}

</script>