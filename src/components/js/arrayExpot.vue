<!-- es6 数组的扩展 -->
<template>
  <div class=''>
    <el-button @click="applyTest">applyTest</el-button>
    <el-button @click="cloneArray">cloneArray</el-button>
    <el-button @click="arrayFrom">arrayFrom</el-button>
    <el-button @click="flatMap">flatMap</el-button>
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
    flatMap() {
      let array = [2, 3, 4, 5]
      let array1 = array.flatMap(x => [x * 2])
      console.log(array1)
    },
    applyTest() {
      console.log(Reflect.apply(Math.floor, undefined, [1.75]));
      // expected output: 1

      console.log(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]));
      // expected output: "hello"

      console.log(Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index);
      // expected output: 4

      console.log(Reflect.apply(''.charAt, 'ponies', [3]));
      // expected output: "i"
      console.log(Reflect.apply(Math.trunc, undefined, [123312312312.1231231231231]))
      let arrayA = [1, 2, 3, 4, 5]
      let arrayB = [45, 556, 77, 111]
      arrayA.push(...arrayB)
      console.log(arrayA)
    },
    cloneArray() {
      let a1 = [1, 2, 3]
      let a2 = a1
      console.log(a2)
      a1[2] = 111111
      console.log(a2)
      let a3 = [4, 5, 6]
      let a4 = [...a3]
      console.log(a4)
      a3[1] = [123]
      console.log(a4)
    },
    arrayFrom() {
      let object = {
        '0': 'a',
        'zyt': 'b',
        'z123': 'c',
        length: 3
      };
      let arr = Array.from(object)
      console.log(arr)
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