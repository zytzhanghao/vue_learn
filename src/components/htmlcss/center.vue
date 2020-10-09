<!--  -->
<template>
  <div class=''>
    <!-- 第一种优点，兼容性好，缺点子元素文本居中，需要其他必须子元素从新设置 -->
    <!-- <div id="parent">
      <div id="child">
      </div>
    </div> -->

    <!-- 第二种 优点只需要设置子级元素就可以实现水平方向布局 缺点 如果子级元素脱离文档流，导致margin属性无效-->
    <!-- <div id="parent1">
      <div id="child1">
      </div>
    </div> -->

    <!-- 第三种 优点父级元素是否脱离文档流，不影响子级元素水平中效果
    缺点 transform 支持性情况不好-->
    <div id="parent2">
      <div id="child2">
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
#parent {
  width: 100%;
  height: 200px;
  background: #cccccc;
  text-align: center;
}
#child {
  width: 20%;
  height: 200px;
  background: red;
  display: inline-block;
}
#parent1 {
  width: 100%;
  height: 200px;
  background: #cccccc;
}
#child1 {
  width: 20%;
  height: 200px;
  background: red;
  /* div 元素默认block */
  display: table;
  margin: 0 auto;
  /* position: absolute;  如果脱离文档流失效*/
  /* 俩个值  表 上下  和左右
    auto会等分浏览器边距 */
}

#parent2 {
  width: 100%;
  height: 200px;
  background: #cccccc;
  position: relative;
}
#child2 {
  width: 20%;
  height: 200px;
  background: red;
  /* 当把当前元素设置为绝对定位后：如果有父定位相对父  无相对页面 */
  position: absolute;
  left: 50%;
  /* 平移  自身x平移width -50% px */
  transform: translateX(-50%);
}
</style>