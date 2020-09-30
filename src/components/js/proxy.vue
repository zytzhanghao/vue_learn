<!-- proxy -->
<template>
  <div class=''>
    <el-button @click="proxy">proxy</el-button>
    <el-button @click="proxyTest">proxyTest</el-button>
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
    proxy() {
      var obj = new Proxy({}, {
        get(target, propKey, receiver) {
          console.log(`得到 ${propKey}!`)
          return Reflect.get(target, propKey, receiver)
        },
        set(target, propKey, receiver) {
          console.log(`设置 ${propKey}!`)
          return Reflect.set(target, propKey, receiver)
        }
      })
      obj.ztt = 11
      console.log(++obj.ztt)
    },
    proxyTest() {

      let set = new Set([1, 2, 4, 5, 6])
      set.add(8)
      let arrr = new Proxy(set, {
        get(target, propsKey, receiver) {
          console.log(target)
          console.log(propsKey)
          console.log(receiver)
          return 'zyt'
        }
      })
      console.log(arrr)
      console.log(set.size)
    }
  },
  created() {

  },
}
</script>
<style lang='scss' scoped>
</style>