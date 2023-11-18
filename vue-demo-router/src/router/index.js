//路由配置文件
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
//引入所有页面
import Home from "../views/Home.vue"

//配置信息，需要页面的相关配置
const routes = [
    //访问首页
    {
        path: "/",
        component: Home,
        name: "home"
    },
    //访问关于页面
    {
        path: "/about",
        component: () => import("../views/About.vue"),
        name: "about",
        //重定向配置，默认跳转 aboutUs
        redirect: "/about/us",
        //二级路由
        children: [
            {
                //二级路径不需要加斜杠
                path: "us",
                component: () => import("../views/aboutSub/AboutUs.vue")
            },
            {
                //二级路径不需要加斜杠
                path: "info",
                component: () => import("../views/aboutSub/AboutInfo.vue")
            }
        ]
    },
    {
        path: "/news",
        name: "news",
        //异步加载方式
        component: () => import("../views/News.vue")
    },
    {
        //路由路径传递参数 :name
        path: "/news/details/:name",
        name: "newsDetails",
        component: () => import("../views/NewsDetails.vue")
    }
]

//创建路由
const router = createRouter ({
    /**
     * createWebHashHistory和createWebHistory
     * 使用createWebHistory时：
     *      访问 Home：http://localhost:5173/
     *      访问 About：http://localhost:5173/about
     *      此种方式需要后台做重定向，否则会出现404问题
     *      原理：H5 pushState()
     * 使用createWebHashHistory时：
     *      访问 Home：http://localhost:5173/#/
     *      访问 About：http://localhost:5173/#/about
     *      不需要后台配置
     *      原理：a标签锚点连接
     */
    history: createWebHashHistory(),
    routes
})

export default router;