<!-- 垂直center分布  -->
<template>
  <div class=''>
    <div id="parent2">
      <div id="child2">
      </div>
    </div>
    <!-- 居中分布  -->
    <div id="parent3">1111
      <div id="child3">
      </div>
    </div>
    <!-- 第二种居中布局 -->
    <div id="parent4">1111
      <div id="child4">
      </div>
    </div>
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

  },
  created() {

  },
}
</script>
<style  scoped>
/* 第一直垂直居中有点 css2属性 对浏览器兼容性强，缺点父组件设置vertical-align 子类继承 文档居中 */
#parent1 {
  width: 100px;
  height: 300px;
  background: #cccccc;
  display: table-cell;
  vertical-align: middle;
}
#child1 {
  width: 100px;
  height: 100px;
  background: red;
}
/* 第二种垂直居中优点 不影响文本，缺点浏览器兼容性差 */
#parent2 {
  width: 100px;
  height: 300px;
  background: #cccccc;
  position: relative;
}
#child2 {
  width: 100px;
  height: 100px;
  background: red;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
/* 第一种垂直水平居中分布 
优点浏览器兼容性强，缺点文本流也只能居中*/
#parent3 {
  width: 300px;
  height: 300px;
  background: #cccccc;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
#child3 {
  width: 100px;
  height: 100px;
  background: red;
  display: inline-block;
}
/* 第二种全面居中优点文本不受影响，缺点浏览器兼容不好 */
#parent4 {
  width: 300px;
  height: 300px;
  background: #cccccc;
  position: relative;
}
#child4 {
  width: 100px;
  height: 100px;
  background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>