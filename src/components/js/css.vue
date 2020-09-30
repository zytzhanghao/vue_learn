<!-- css test -->
<template>
  <div>
    <div class='faterBox'>
      <p class="p1">after</p>
      <div class="box1">1111111111111111</div>
      <div class="box2">2222222222222222222</div>
      <div class="box3">333333333333333</div>
      <div class="box4">4444444444444444</div>
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
<style scoped>
.p1::after {
  content: "让人兴兴兴奋!";
  color: green;
}
.faterBox {
  height: 400;
  border: 3px orange;
  align-content: start;
}
.box1 {
  background: green;
}
.box2 {
  background: red;
}
.box3 {
  background: blue;
}
.box4 {
  background: black;
}
</style>