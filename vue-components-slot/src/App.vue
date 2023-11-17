<template>
  <!-- 在引入的组件<>之中编写想要传递给子组件 slot 的内容 -->
  <!-- <SlotsBase>
    <div>
      <h3>插槽标题</h3>
      <p>插槽内容</p>
    </div>
  </SlotsBase> -->

  <!-- 可以使用v-slot指令分别渲染指定部分，v-slot可以简写为# -->
  <!-- <SlotsTwo>
    <template v-slot:header>
      <h3>{{ message }}</h3>
    </template>
    <template #main>
      <p>内容</p>
    </template>
  </SlotsTwo> -->

  <!-- 使用v-slot（简写为#）接收子组件传来的数据，再将父元素数据通过插槽交给子元素渲染 -->
  <SlotsThree>
    <template #title="slotProps">
      <h3>{{ parentData }} - {{ slotProps.msg }}</h3>
    </template>
    <template #content="slotProps">
      <p>{{ slotProps.content }}</p>
    </template>
  </SlotsThree>
</template>

<script>

import SlotsBase from "./components/SlotsBase.vue"
import SlotsTwo from "./components/SlotsTwo.vue"
import SlotsThree from "./components/SlotsThree.vue"

export default {
  data() {
    return {
      message: "插槽内容第二部分",
      parentData: "父组件数据"
    }
  },
  components: {
    SlotsBase,
    SlotsTwo,
    SlotsThree
  }
}

</script>