<template>
  <h1>vuex使用</h1>
  <p>在主组件中使用vuex中的数据，counter= {{ $store.state.counter }}</p>
  <p>使用数据过滤方法读取数据：num = {{ $store.getters.getNum }}</p>
  <p>通过事件调用vuex的mutations中方法</p>
  <button @click="addClickHandle">增加counter</button>
  <button @click="addAsyncClickHandle">异步增加</button>
  <VuexDemo />
</template>

<script>

import VuexDemo from "./components/VuexDemo.vue";

export default {
  components: {
    VuexDemo
  },
  methods: {
    addClickHandle() {
      //固定调用方式，调用vuex的mutations中方法
      //方法参数跟在后边
      this.$store.commit("addCounter", 5)
    },
    addAsyncClickHandle() {
      //固定调用方式，调用vuex的actions中方法
      this.$store.dispatch("asyncAddCounter")
    }
  }
}


</script>