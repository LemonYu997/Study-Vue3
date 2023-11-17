<template>
    <h2>依赖注入</h2>
    <!-- 原始方案，一层层向下传递，非常麻烦 -->
    <!-- <Parent title="爷爷传下的数据"/> -->
    <Parent />

    <p><b>备注：provide和inject只能从上右下传递</b></p>
</template>

<script>

//引入父组件
import Parent from "./components/Parent.vue"

export default {
    data() {
        return {
            message: "爷爷的数据"
        }
    },
    //通过provice直接向所有后代组件提供依赖
    provide() {
        return {
            //可以传递动态数据
            message: this.message
        }
    },
    components: {
        Parent
    }
}

</script>