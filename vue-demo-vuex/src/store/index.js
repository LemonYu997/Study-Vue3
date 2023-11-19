import { createStore } from "vuex"
import axios from "axios"

//vuex配置
//vuex状态管理核心概念：State、Getter、Mutation、Action
const store = createStore({
    //所有的状态都放在这里（数据）
    state: {
        counter: 666,
        num: -3
    },
    //数据过滤
    getters: {
        //自定义过滤方法
        getNum(state) {
            return state.num > 0 ? state.num : "num数据异常"
        }
    },
    //修改状态（数据）
    mutations: {
        //参数2是自定义的传参
        addCounter(state, n) {
            //所有调用该数据的组件会同步修改
            state.counter += n;
        }
    },
    //action直接提交mutation，而不是直接变更状态
    //action可以包含异步操作，mutation不能异步操作
    actions: {
        //{ commit } 对象结构赋值
        asyncAddCounter({ commit }) {
            axios.get("http://iwenwiki.com/api/generator/list.php")
            .then(res => {
                //注意commit使用方式
                commit("addCounter", res.data[0]);
            })
        }
    }
})

export default store;