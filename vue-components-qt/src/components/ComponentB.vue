<template>
    <h3>ComponentB</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <p v-for="(item, index) of names" :key="index">{{ item }}</p>
    <p><b>props中的数据是只读的，不能修改</b></p>
    <button @click="updateHandler">修改数据</button>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        //修改props中的数据会报错
        updateHandler() {
            // this.title = "修改了名字"
        }
    },
    //props中的数据是只读的，不能修改
    props: {
        //父组件传递数据的类型校验
        title: {
            type: [String, Number, Array],
            //是否必须传递，不传会报警告
            required: true
        },
        age: {
            type: Number,
            //事指默认值，如果父组件没有传递该数据会用这个值
            default: 0
        },
        //数字和字符串可以直接default，但是数组和对象必须通过工厂函数返回默认值
        names:{
            type: Array,
            default() {
                return ["空"];
            }
        }
    }
}
</script>