<template>
    <h3>ComponentB</h3>
    <p>{{ title }}</p>
    <p>{{ onEvent("子元素的数据") }}</p>
</template>


<script>

export default {
    data() {
        return {

        }
    },
    props: {
        title: String,
        //通过函数调用间接实现子传父
        onEvent: Function
    }
}

</script>