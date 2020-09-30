<!--  -->
<template>
  <div class=''>
    <h1>hello</h1>
    {{this.$route.meta}}
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in this.$route.meta"
                            :key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
      <br>
    </div>
    <div>
      <el-button @click="test()">test</el-button>
    </div>
    <div>
      <router-link to="/father">father</router-link>
    </div>
    <div>
      <router-link to="/children">children</router-link>
    </div>
    <div>
      <router-link to="/box">box</router-link>
    </div>
    <div>
      <router-link to="/children2">children2</router-link>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      req: '123'
    }
  },
  computed: {},
  watch: {},
  methods: {
    test() {
      let { log, error } = console
      log('1')
      error('2')
      log(log)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>