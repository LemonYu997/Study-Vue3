<template>
    <h1>事件参数</h1>
    <button @click="addCount">Add</button>
    <p>{{ count }}</p>
    <button @click="sayHello('hello')">传递参数-hello</button>
    <p>传递参数，点谁就打印谁，参数中使用 $event 表示事件对象</p>
    <p @click="getNameHandler(item, $event)" v-for="(item, index) of names" :id="index">{{ item }}</p>
</template>

<script>
    export default {
        data() {
            return {
                count: 0,
                names: ["张三", "李四", "王五"]
            }
        },
        methods: {
            //event对象
            addCount(e) {
                // console.log(e);

                //vue中的event对象就是原生JS的Event对象
                e.target.innerHTML = "Add" + this.count;
                this.count++;
            },
            sayHello(msg) {
                console.log(msg);
            },
            getNameHandler(name, e) {
                console.log(name);
                console.log(e);
            }
        }
    }
</script>