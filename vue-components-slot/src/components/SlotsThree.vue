<template>
    <h3>插槽第三部分</h3>
    <p>有些时候插槽内容需要同时使用父组件域内和子组件域内的数据，可以使用一种方法来让子组件在渲染时将一部分数据提供给插槽</p>
    <p>可以像对组件传递props那样，向一个插槽的出口上传递attributes</p>
    <p>先传给父元素，再通过父元素传给插槽 </p>

    <slot name="title" :msg="childData"></slot>
    <slot name="content" :content="content"></slot>
</template>

<script>

export default {
    data() {
        return {
            //先传给父元素，再通过父元素传给插槽
            childData: "子组件数据",
            content: "内容"
        }
    }
}

</script>