<template>
  <div class=''>
    <el-button @click="enumberable()">enumberable</el-button>
    <el-button @click="ObjFunction()">ObjFunction</el-button>
    <el-button @click="Oco()">Oco</el-button>
    <el-button @click="methodsTest()">methodsTest</el-button>
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
    enumberable() {
      let obj = {
        name: 'zyt',
        age: 14
      }
      console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
    },
    ObjFunction() {
      let { a, b, ...z } = { a: 1, b: 2, c: 123, d: 123 }
      console.log(a, b, z)
    },
    Oco() {
      let obj = {
        zyt: {
          name: {
            id: 1
          }
        }
      }
      console.log(obj?.zyt?.name?.id)
      console.log(obj?.zyt?.name?.id?.nr?.a)
      console.log(obj.zyt.name.id.nr)
    },
    methodsTest() {
      let objectTest = {
        name: 'zyt',
        age: ' 14',
        work: 'cs'
      }
      let { keys, values, entries } = Object;
      for (const c of keys(objectTest)) {
        console.log(c)
      }
      for (const a of values(objectTest)) {
        console.log(a)
      }
      for (const [key, value] of entries(objectTest)) {
        console.log([value, key])
      }
      let map = new Map([
        ['zyt', 'name'],
        ['age', 14]
      ])
      console.log(Object.fromEntries(map))
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>
<style lang='scss' scoped>
</style>