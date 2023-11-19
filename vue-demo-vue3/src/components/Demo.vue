<template>
    <h1>vue3语法</h1>
    <p>{{ message }}</p>
    <ul>
        <li v-for="(item, index) in names.list" :key="index">{{ item }}</li>
    </ul>
    <button @click="clickHandle">按钮</button>
    <p>{{ msg }}</p>
</template>
  
<script>

import { ref, reactive } from "vue";

export default {
    //vue2写法
    // data() {
    //   return {
    //     message: "消息"
    //   }
    // },
    props: {
        msg: String
    },
    //组合式API，props接收父组件传递的数据
    setup(props, ctx) {
        //setup中没有this关键字
        console.log(this);  //undefined
        //当前实例对象为ctx(context)
        console.log(ctx);

        //vue3 写法 ref类似vue2的data，但是只存储基本类型
        const message = ref("消息")
        //reactive 存储对象型数据
        const names = reactive({
            list: ["张三", "李四", "王五"]
        })

        //事件不需要放在methos中，直接可以定义在这里
        function clickHandle() {
            message.value = "新消息";
        }

        const msg = props.msg;

        //记得return
        return {
            message,
            names,
            clickHandle,
            msg
        }
    }
}

</script>