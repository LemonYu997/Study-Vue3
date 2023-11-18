//请求封装

// 参考文档 https://www.kancloud.cn/yunye/axios/234845

import axios from "axios";
import querystring from "querystring";

const instance = axios.create({
    //网络请求的公共配置
    timeout: 5000
})

//拦截器

//拦截器——请求发送之前处理
instance.interceptors.request.use(
    //成功
    config => {
        if (config.methods === "post") {
            //对post请求体进行字符串转换
            config.data = querystring.stringify(config.data);
        }
        //config包含网络请求的所有信息
        return config;
    },
    //失败
    error => {
        return Promise.reject(error);
    }
)

//拦截器——获取响应之前
instance.interceptors.response.use(
    response => {
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
    },
    error => {
        const { response } = error;
        //错误处理
        errorHandle(response.status, response.info);
    }
)

//错误处理方法
const errorHandle = (status, info) => {
    switch(status) {
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}


export default instance;