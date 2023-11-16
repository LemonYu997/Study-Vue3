<template>
    <h1>Style绑定</h1>
    <p :style="{color: activeColor, fontSize: fontSize}">对象绑定1</p>
    <p :style="styleObject">对象绑定2</p>
    <p :style="[styleObject]">数组绑定</p>
</template>


<script>

export default {
    data() {
        return {
            activeColor: "skyblue",
            fontSize: "30px",
            styleObject: {
                color: "red",
                fontSize: "30px"
            }
        }
    }
}

</script>