<template>
    <h1>数组变化监听</h1>
    <button @click="addListHandler">添加数据</button>
    <ul>
        <li v-for="(item,index) in names" :key="index">{{ item }}</li>
    </ul>
    <button @click="concatHandler">合并数组</button>
    <h3>数组1</h3>
    <p v-for="(item, index) in nums1" :key="index">{{ item }}</p>
    <h3>数组2</h3>
    <p v-for="(item, index) in nums2" :key="index">{{ item }}</p>
</template>


<script>

export default {
    data() {
        return {
            names: ["张三", "李四", "王五"],
            nums1: [1, 2, 3, 4, 5],
            nums2: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        addListHandler() {
            //vue提供的数组变更方法：push()、pop()、shift()、unshift()、splice()、sort()、reverse()
            //会引起UI自动变化
            
            //引起UI自动更新的方法
            // this.names.push("赵六");
            
            //使用以下方法并不会改变UI，因为它们返回的是一个新数组
            //filter()、concat()、slice()
        
            //想要改变UI时需要重新赋值
            this.names = this.names.concat(["赵六"]);
        
        },
        concatHandler() {
            this.nums1 = this.nums1.concat(this.nums2);
        }
    }
}

</script>