<template>
    <h1>表单输入绑定</h1>
    <p>将表单输入框内容同步给JS中变量</p>
    <p>v-model的修饰符：.lazy、.number、.trim，想要输入完之后再同步而不是实时同步可以使用.lazy</p>
    <form>
        <input type="text" v-model.lazy="message">
        <p>输入框的值：{{ message }}</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">复选框的值：{{ checked }}</label>
    </form>
    
</template>


<script>

export default {
    data() {
        return {
            message: "",
            checked: false
        }
    }
}


</script>