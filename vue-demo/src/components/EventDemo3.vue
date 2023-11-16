<template>
    <h1>事件修饰符</h1>
    <p>处理事件时调用event.preventDefault()或者event.stopPropagation()很常见，可以直接在方法内调用。</p>
    <p>如果可以专注于处理数据逻辑而不是处理Dom事件细节会更好。</p>
    <p>vue提供了 v-on 事件修饰符，常用有：.stop .prevent .once .enter 等</p>
    <br>
    <h3>阻止默认事件</h3>
    <a @click.prevent="clickHandler" href="www.baidu.com">百度</a>
    <h3>阻止事件冒泡</h3>
    <div @click="clickDiv">
        <p @click.stop="clickP">测试冒泡，点击子元素事件，父元素事件默认会触发，使用.stop阻止</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            clickHandler(e) {
                //通过event阻止默认事件
                // e.preventDefault();
                console.log("点击了");
            },
            clickDiv() {
                console.log("Div");
            },
            clickP(e) {
                //使用event关闭事件冒泡
                // e.stopPropagation();
                console.log("P");
            }
        }
    }
</script>