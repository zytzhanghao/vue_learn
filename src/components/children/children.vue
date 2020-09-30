<!--  -->
<template>
  <div class=''>
    <h1>chlidren1</h1>
    <h2 id='text1'>{{this.$route.params.userId}}</h2>
    <span>1</span><span>2</span>
    <el-button @click="test1">test1</el-button>
    <div>
      <span class="bigger">big</span>
      <span class="smaller">small</span>
    </div>
    <div>
      <textarea id="comment"
                rows="8"
                cols="20">
            多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框
            多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框
            多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框
            多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框
            多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框
            多行文本框多行文本框多行文本框多行文本框
            多行文本框多行文本框多行文本框多行文本框多行文本框
            多行文本框多行文本框多行文本框多行文本框多行文本框多行文本框
        </textarea>
    </div>

  </div>
</template>
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script>
export default {
  components: {},
  data () {
    return {
    };
  },
  computed: {},
  watch: {},
  methods: {
    test1 () {
      let i = document.getElementById('text1')
      console.log(i)
      var link = document.querySelector('a');
      console.log(link)
      let selector = document.querySelector('span')
      console.log(selector)
    }
  },
}
</script>
<style scoped>
</style>
<script>
$(function() {
  var $comment = $('#comment');   //获取评论框
  $('.bigger').click(function() {
    if (!$comment.is(".animated")) {  //判断是否处于动画
      if ($comment.height() < 500) {
        $comment.animate({ height: "+=50" }, 400); //重新设置高度，在原有的基础上加50
      }
    }
  })
  $('.smaller').click(function() {
    if (!$comment.is(".animated")) {  //判断是否处于动画
      if ($comment.height() > 50) {
        $comment.animate({ height: "-=50" }, 400);  //重新设置高度，在原有的基础上减50
      }
    }
  });
});
</script>