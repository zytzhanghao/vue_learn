<!-- es6 字符串的扩展 -->
<template>
  <div class=''>
    <el-button @click="unicodeStr">unicodeStr</el-button>
    <el-button @click="iteratorStr">iteratorStr</el-button>
    <div id="result"></div>
    <el-button @click="templateStr">templateStr</el-button>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    unicodeStr () {
      console.log("\u{99999}")
    },
    iteratorStr () {
      for (const iterator of 'object') {
        console.log(iterator)
      }
    },
    templateStr () {
      // let name = 'zyt'
      // this.$('#result').append(`
      // There are <b>${'123'}</b> items
      // in your basket, <em>${'12333'}</em>
      // <p>1232131231231</p>
      // <h2>${name}</h2>
      // are on sale!`)
      // let data = [1, 2, 3, 4, 5, 6, 7]
      //   let template = `
      // <ul>
      // <% for(let i=0; i<data.length;i++){   %>
      // <li> <%=  data[i]   &></li>
      // <% } %>
      // </ul>`
      // echo('<ul>');
      // for (let i = 0; i < data.supplies.length; i++) {
      //   echo('<li>');
      //   echo(data.supplies[i]);
      //   echo('</li>');
      // }
      // echo('</ul>');
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>
</style>