<template>
    <h1>Element-Plus学习</h1>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
  </el-row>

  <el-switch v-model="value1" />
  <el-switch
    v-model="value2"
    class="ml-2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />

  <br>
  

  <el-icon><Plus /></el-icon>
  <el-icon><FullScreen /></el-icon>
  <el-icon><Setting /></el-icon>
  <el-icon><Filter /></el-icon>
</template>

<script>

import { ref } from "vue"

export default {
    setup() {
        const value1 = ref(false)
        const value2 = ref(true)

        return {
            value1,
            value2
        }
    }
}

</script>