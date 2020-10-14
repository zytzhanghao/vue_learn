<!-- 多列布局 -->
<template>
  <div class=''>
    <!-- 二列布局 -->
    <!-- <div id="parent">
      <div id="left"></div>
      <div id="right"></div>
    </div> -->

    <!-- 第一种解决方案优化 -->
    <!-- <div id="parent">
      <div id="left1"></div>
      <div id="right_fix1">
        <div id="right1">
        </div>
      </div>
    </div> -->

    <!-- 第二种俩列解决方案 -->
    <div id="parent">
      <div id="left2"></div>
      <div id="right2"></div>
    </div>

  </div>
</template>
<script>
export default {
}
</script>
<style  scoped>
#right,
#left {
  height: 300px;
}
/* 第一种实现方式优点：实现简单
缺点第一浏览器兼容性差，个别老旧浏览器可能有空白
缺点二margin-left:需要设置成另一列的宽，代码耦合性高
缺点三子级元素 clear：both 清除浮动会有问题
 */
#right_fix {
}
#right {
  margin-left: 100px;
  background: #cccccc;
}
#left {
  width: 100px;
  float: left;
  background: red;
}
/* 第一种优化 
在第一种的基础上 给right加了父级div
相对于第一种缺点
缺点第一浏览器兼容性差，个别老旧浏览器可能有空白
缺点三子级元素 clear：both 清除浮动会有问题
已经优化
但还需要设置等宽，缺点二margin-left:需要设置成另一列的宽，代码耦合性高
*/
#right_fix1 {
  float: right;
  width: 100%;
  margin-right: -100px;
  background: green;
}
#left1 {
  width: 100px;
  float: left;
  height: 300px;
  background: red;
}
#right1 {
  height: 300px;
  background: #cccccc;
}
/* 第二种解决方案优点
第一种解决方案缺点都没有
缺点 因为开启bfc */
#left2 {
  width: 100px;
  float: left;
  height: 300px;
  background: red;
}
#right2 {
  height: 300px;
  background: #cccccc;
  /* 开启BFC模式 -当前元素内部环境与外界完全隔离  bfc模式下一列不开启浮动也没有兼容性问题*/
  overflow: hidden;
}
</style>