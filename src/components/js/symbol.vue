<!--  -->
<template>
  <div class=''>
    <el-button @click="symbol">symbol</el-button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    symbol() {
      let sym1 = Symbol()
      let sym2 = Symbol()
      console.log(sym1 === sym2)
    }
  },
}
</script>
<style lang='scss' scoped>
</style>