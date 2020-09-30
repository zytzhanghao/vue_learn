<!-- es6 String function 扩展 -->
<template>
  <div class=''>
    <el-button @click="fromCodePoint()">fromCodePoint</el-button>
    <el-button @click="matchAll()">matchAll</el-button>
    <el-button @click="isfinite()">isfinite</el-button>
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
    fromCodePoint () {
      var obj = {
        name: 'justwe7',
        age: 26,
        fn: function() {
          alert('justwe7')
        },
      }
      console.log(obj)
      console.dir(obj)
    },
    matchAll () {
      console.log('zyt'.matchAll('$z'))
    },
    isfinite () {
      console.log(Number.isInteger(1.000000001000000000000000000000000000000001))
    }

    //parseInt and parseFolat 转移到number对象
  },
  created () {

  },
  mounted () {

  },
}
</script>
<style lang='scss' scoped>
</style>