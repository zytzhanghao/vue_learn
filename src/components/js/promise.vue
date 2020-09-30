<!-- promise -->
<template>
  <div class=''>
    <el-button @click="newPromise">newPromise</el-button>
    <el-button></el-button>
    <el-button></el-button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  methods: {
    newPromise() {
      new Promise(resolve => {
        setTimeout(() => {
          resolve('hello')
        }, 2000);
      }).then(req => {
        console.log(req)
        console.log('111111')
      })
    },
  },
  created() {
  },
}
</script>
<style lang='scss' scoped>
</style>