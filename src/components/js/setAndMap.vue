<!-- set and map  -->
<template>
  <div class=''>
    <el-button @click="setFeatures">setFeatures</el-button>
    <el-button @click="setFunction">setFunction</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    setFeatures() {
      let setData = new Set([1, 2, 3, 4, 5, 6])
      setData.add(7).add(8)
      console.log(setData)
      console.log(setData.size)
      setData.delete(1)
      console.log(setData)
      console.log(setData.has(1))
    },
    setFunction() {
      //set的遍历
      let setData = new Set([1, 2, 3, 4, 5, 6])
      console.log(setData.keys())
      console.log(setData.values())
      console.log(setData.entries())
    }
  }
}
</script>
<style lang='scss' scoped>
</style>