<template>
    <h3>子组件</h3>
    <p>在子组件中读取vuex中的数据：counter = {{ $store.state.counter }}</p>
    <p>快捷读取方式：{{ counter }}</p>
    <p>使用数据过滤方法读取数据：num = {{ getNum }}</p>
    <button @click="addClickHandle">快捷调用：增加counter</button>
    <button @click="asyncAddClickHandle">快捷调用：异步增加counter</button>
</template>

<script>

//另一种读取vuex的方式，快捷读取
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
    //快捷读取vuex的数据
    computed: {
        ...mapState(["counter"]),
        ...mapGetters(["getNum"]),
    },
    methods: {
        //注意mapMutations要放在methods中
        ...mapMutations(["addCounter"]),
        ...mapActions(["asyncAddCounter"]),
        addClickHandle() {
            //快捷调用的方式
            this.addCounter(3);
        },
        asyncAddClickHandle() {
            this.asyncAddCounter();
        }
    }
}

</script>