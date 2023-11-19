<template>
    <h1>vue3生命周期</h1>
    <p>{{ message }}</p>
</template>

<script>
import {onMounted,inject} from 'vue'

export default {
    //在setup中使用生命周期函数
    setup() {

        //vue2中同一个生命周期函数只能存在一个，现在可以存在多个
        onMounted(() => {
            console.log("生命周期函数：onMounted1");
        })
        onMounted(() => {
            console.log("生命周期函数：onMounted2");
        })

        const message = inject("message")

        return {
            message
        }
    }
}

</script>