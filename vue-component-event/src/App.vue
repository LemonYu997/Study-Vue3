<template>
  <!-- <ComponentEvent /> -->
  <!-- <Main /> -->
  <!-- <ComponentA /> -->

  <!-- 属性传递 -->
  <p>传递一个组件，但并没有被该组件声明为props, emits, attribute 或者 v-on事件监听器，常见的例子是class, style, id</p>
  <p>当一个组件以单个元素为根作渲染时，透传的attribute会自动被添加到根元素上</p>
  <p><b>备注：必须是唯一根元素</b></p>
  <AttrComponent class="attr-container"/>
  
</template>

<script>
import ComponentEvent from "./components/ComponentEvent.vue";
import Main from "./components/Main.vue";
import ComponentA from "./components/ComponentA.vue";
import AttrComponent from "./components/AttrComponent.vue";


export default {
  components: {
    ComponentEvent,
    Main,
    ComponentA,
    AttrComponent
  }
}

</script>