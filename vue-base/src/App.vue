<template>
  <h1>模板语法/文本插值</h1>
  <p>{{ msg }}</p>
  <h2>也支持单一表达式，但是需要有返回值</h2>
  <p>{{ number + 1 }}</p>
  <p>{{ ok ? 'Yes' : 'No' }}</p>
  <p>{{ message.split("").reverse().join("") }}</p>
  <!-- 不能没有返回值 <p>{{ var a = 1 }}</p> -->
  <!-- 不支持条件表达式，只支持三元运算符 <p>{{ if(ok) {return message} }}</p> -->
  <h1>原始HTML</h1>
  <p>{{ rawHtml }}</p>
  <p v-html="rawHtml"></p>
</template>

<script>

export default {
  data() {
    return {
      msg: "神奇的语法",
      number: 10,
      ok: true,
      message: "大家好",
      rawHtml: "<a href='https://www.baidu.com'>原始HTML</a>"
    }
  }
}

</script>