<template>
  <div class=''>promise
    <el-button @click="aysnTest">promise-test</el-button>
  </div>

</template>
<script>
export default {
  methods: {
    aysnTest (flg) {
      return new Promise(function() {
        if (flg) {
          setTimeout(() => {
            console.log('successs')
          }, 5000)
        } else {
          console.log('fulfiled')
        }
      }).then(setTimeout(console.log('speak'), 50000))
    },
  }
}
</script>
<style lang='scss' scoped>
</style>