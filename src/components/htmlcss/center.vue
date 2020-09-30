<!--  -->
<template>
  <div class=''>
    <div id="parent">
      <div id="child">
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
</style>