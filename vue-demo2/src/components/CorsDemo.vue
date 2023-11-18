<template>
    <h1>跨域解决方案</h1>
    <p>JS请求和当前所在服务器域名、端口、协议不一致的时候会出现跨域问题</p>
</template>


<script>

import axios from "axios"

export default {
    mounted() {
        //这个地址直接请求会发生跨域问题
        axios.get("/api/FingerUnion/list.php")
        .then(res => {
            console.log(res.data);
        })
    }
}

</script>