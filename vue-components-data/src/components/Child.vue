<template>
    <h3>Child</h3>
    <!-- <p>{{ title }}</p> -->
    <p>{{ message }}</p>
    <p>{{ fullMessage }}</p>
    <p>{{ globalData }}</p>
</template>

<script>

export default {
    //通过inject获取父系provide提供的数据，不必一层层传递
    inject: ["message", "globalData"],
    data() {
        return {
            fullMessage: this.message
        }
    }
    // props: {
    //     title: {
    //         type: String
    //     }
    // },

}

</script>