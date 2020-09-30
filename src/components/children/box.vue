<!--  -->
<template>
  <div class=''>
    <h1>box</h1>
    <p>margin border padding content</p>
    <div class="box"></div>

  </div>
</template>
<script>
export default {
  components: {},
  name: 'box',
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  },
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
<style scoped>
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
  background-image: linear-gradient(
    105deg,
    rgba(0, 249, 255, 1) 39%,
    rgba(51, 56, 57, 1) 96%
  );
  background-repeat: repeat;
}
</style>