<template>
  <!-- <Header />
  <Main />
  <Aside />
  <Parent /> -->
  <ComponentA />

</template>

<script>

// Header在main.js中进行了全局注册，就不需要在这里注册
// import Header from "./pages/Header.vue"
// import Main from "./pages/Main.vue"
// import Aside from "./pages/Aside.vue"

// import Parent from "./components/Parent.vue"
import ComponentA from "./components/ComponentA.vue"


export default {
  components: {
    // Header,
    // Main,
    // Aside,
    // Parent,
    ComponentA,
  }
}

</script>