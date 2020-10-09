<!-- 多列布局 -->
<template>
  <div class=''>
    <!-- 二列布局 -->
    <div id="parent">
      <div id="right"></div>
      <div id="left"></div>
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
#parent {
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
</style>