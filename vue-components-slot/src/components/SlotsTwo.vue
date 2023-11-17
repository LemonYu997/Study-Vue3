<template>
    <h3>Slot第二部分</h3>
    <p>插槽内容可以访问到父组件的数据作用域，所以数据在父组件填充即可</p>
    <p>如果没有传递数据，会使用slot标签中的默认值</p>
    <p>具名插槽：可以使用v-slot指令分别渲染指定部分，v-slot可以简写为#</p>


    <slot name="header">插槽默认值</slot>
    <hr>
    <slot name="main"></slot>
</template>

<script>

</script>