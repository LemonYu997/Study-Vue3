<template>
    <h1>自定义请求封装</h1>
    <p>在utils中封装请求，在api中封装路径</p>
</template>

<script>

//引入API
import api from "../api/index";

export default {
    mounted() {
        api.getChengpin().then(res => {
            console.log(res.data);
        })
    }
}

</script>