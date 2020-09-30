<template>
  <div class=''
       id="father">
    <h1>zytLast</h1>
    {{this.$route.meta}}
    {{this.$store.state.father.count}}
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in this.$route.meta"
                            :key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
      <br>
    </div>
    <router-view></router-view>
    <children></children>

    <router-link :to="{name:'childrenTo' ,params:{userId:123}}">
      动态</router-link>
    <router-link :to="{path:'/promise'}">promise</router-link>
    <button @click="a">回城</button>
    <button @click="b">真视</button>
    <button @click="c">replace</button>
    <button @click="vuex">vuex</button>
  </div>
</template>
<script>
import children from '@/components/children/children'
import store from '@/store'
export default {
  name: 'father',
  components: { children },
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    vuex () {
      store.commit('father/init')
      console.log(store.state.count) // -> 1
    },
    a () {
      this.$router.go(-3)
    },
    b () {
      //解构函数允许默认值
      let [a1, a2, a3] = [1, 2, 3]
      console.log(a1, a2, a3)
    },

    c () {
      this.$router.replace('children')
    },
    lok () {
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf("Opera") > -1) {
        return "Opera"
      }
      if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
      }
      if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
      }
      if (userAgent.indexOf("Edge") > -1) {
        return "Edge";
      }
      if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
        return "IE";
      }
      return null
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
    console.log(from)
    next()
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  // },
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  // },
  created () {
  },
  mounted () {
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  activated () { },
}
</script>
<style  scoped>
@import "./test.css";
</style>