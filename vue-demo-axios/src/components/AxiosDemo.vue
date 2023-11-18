<template>
    <h1>axios示例</h1>
    <p>{{ chengpin.title }}</p>
</template>

<script>

// 全局引用后就不用在这里引入，但是挂载后就变成this.$axios
// import axios from "axios";
//安装字符串转换工具 cnpm install --save querystring
import querystring from 'querystring';

export default {
    data() {
        return {
            chengpin: {}
        }
    },
    //渲染完成就会执行的方法
    mounted() {
        //get 请求
        this.$axios({
            method: "get",
            url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
        }).then(res => {
            console.log(res.data);
            this.chengpin = res.data.chengpinDetails[0];
        });
        //post 请求
        this.$axios({
            method: "post",
            url: "http://iwenwiki.com/api/blueberrypai/login.php",
            //安装字符串转换工具 cnpm install --save querystring
            data: querystring.stringify({
                user_id: "iwen@qq.com",
                password: "iwen123",
                verification_code: "crfvw"
            })
        }).then(res => {
            console.log(res.data);
        });


        //简便写法
        this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
        .then(res => {
            console.log(res.data);
        });

        this.$axios.post("http://iwenwiki.com/api/blueberrypai/login.php", querystring.stringify({
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
        })).then(res => {
            console.log(res.data);
        })
    }
}

</script>