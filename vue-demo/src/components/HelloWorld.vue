<template>
  <h1>属性绑定</h1>
  <p>双大括号不能在Html attributes中使用，想要响应式绑定一个attribnutes，需要使用v-bind:，简写为:</p>
  <!-- <div class={{ active }}>aaa</div> -->
  <p>值为null和undefined时，不会被绑定</p>
  <div v-bind:id="dynamicId" v-bind:class="dynamicClass" v-bind:title="dynamicTitle">测试</div>
  <button :disabled="isButtonDisabled">Button</button>
  <p>可以绑定一个对象，相当于一次绑定多个属性，属性名为html属性名，属性值为html属性值</p>
  <div v-bind="objectOfAttrs">测试</div>
</template>

<script>

export default {
  data() {
    return {
      msg: "Hello World!",
      active: "active",
      dynamicId: "appId",
      dynamicClass: "appClass",
      dynamicTitle: null,
      isButtonDisabled: true,
      objectOfAttrs: {
        id: "appId",
        class: "appClass",
      }
    }
  }
}

</script>

<style>
.appClass {
  color: red;
  font-size: 30px;
}
</style>

