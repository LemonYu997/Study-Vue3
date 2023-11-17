<template>
  <!-- <UseComponent /> -->

  <p>动态显示A组件或B组件</p>
  <p>当切换组件时，被切换掉的组件会被卸载，可以通过 keep-alive 保活</p>
  <keep-alive>
    <component :is="tabComponent"></component>
  </keep-alive>
  <button @click="changeHandle">切换组件</button>
</template>

<script>

// import UseComponent from "./components/UserComponent.vue";

import ComponentA from "./components/ComponentA.vue"
import ComponentB from "./components/ComponentB.vue"

export default {
  data() {
    return {
      //动态显示A组件或B组件
      tabComponent: ComponentA
    }
  },
  components: {
    // UseComponent,
    ComponentA,
    ComponentB
  },
  methods: {
    changeHandle() {
      //切换为A组件或B组件
      this.tabComponent = this.tabComponent == "ComponentA" ? "ComponentB" : "ComponentA";
    }
  }
}

</script>