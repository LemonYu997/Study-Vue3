<template>
    <h3>Main</h3>
    <p>组件事件配合v-model使用</p>
    <Search @SearchEvent="getSearchContent"/>
    <p>搜索内容为:{{ search }}</p>
</template>

<script>

import Search from "./Search.vue";


export default {
    data() {
        return {
            search: ""
        }
    },
    components: {
        Search
    },
    methods: {
        getSearchContent(data) {
            this.search = data;
        }
    }
}

</script>