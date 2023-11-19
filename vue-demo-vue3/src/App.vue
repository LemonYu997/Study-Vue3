<template>
  <Demo msg="Props数据"/>
  <hr>
  <LifeDemo />
</template>

<script>

import Demo from "./components/Demo.vue"
import LifeDemo from "./components/LifeDemo.vue"

import {provide} from "vue"

export default {
  components: {
    Demo,
    LifeDemo
  },
  setup() {
    //将信息传给子元素
    provide("message", "provide提供的信息")
  }
}

</script>