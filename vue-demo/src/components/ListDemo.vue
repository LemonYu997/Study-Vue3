<template>
    <h1>列表渲染</h1>
    <p>v-for 用来渲染一个列表，需要使用 item in items 语法。item代表元素别名，items是需要渲染的数组</p>
    <p v-for="item in names">{{ item }}</p>
    <p v-for="name in names">{{ name }}</p>
    <p>正常情况下渲染的都是Json数据 (item,index) in items，其中index表示数组下标索引</p>
    <div v-for="(item, index) in result">
        <p>{{ item.title }}-{{ index }}</p>
        <img :src="item.avator">
    </div>
    <p>可以渲染对象的每一条属性 (value, key, index) in items，value表示属性值，key表示属性名</p>
    <div>
        <p v-for="(value, key, index) in userInfo">{{ value }}-{{ key }}-{{ index }}</p>
    </div>
    <p><b>如果数据项的顺序改变了，vue在渲染时并不会随之改变DOM元素顺序，想要重排元素，可以给每个元素添加一个唯一的key属性</b></p>
    <p v-for="(item, index) in names" :key="index">{{ item }}</p>
    <p><b>真实应用中不推荐使用index作为key，应该选唯一不变的值，如id</b></p>
    <div v-for="item in result" :key="item.id">
        <p>{{ item.title }}</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            names: ["张三", "李四", "王五"],
            result: [{
                "id": 123,
                "title": "我是张三",
                "avator": "http://iph.href.lu/100x100"
            }, {
                "id": 124,
                "title": "我是李四",
                "avator": "http://iph.href.lu/100x100"
            }, {
                "id": 125,
                "title": "我是王五",
                "avator": "http://iph.href.lu/100x100"
            }],
            userInfo: {
                name: "Lemon",
                age: 22,
                sex: "男"
            }
        }
    }
}

</script>