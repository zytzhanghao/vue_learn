<!-- 设计模式  -->
<template>
  <div class=''>
    <el-button>懒汉式</el-button>
  </div>
</template>
<script>
let ShopCar = (function() {  let instance; function init () {
    return { buy (good) { this.goods.push(good); }, goods: [], }
  } return { getInstance: function() { if (!instance) { instance = init(); } return instance; }, };})
  ();
let car1 = ShopCar.getInstance()
let car2 = ShopCar.getInstance()
car1.buy('橘子'); car2.buy('苹果')
console.log(car1.goods)

export default {
  components: {},
  data () {
    return {

    };
  },
  methods: {
    lazy () {
      let ShopCar = (function() {
        let instance;
        function init () {
          return {
            buy (good) {
              this.goods.push(good);
            },
            goods: [],
          }
        }
        return {
          getInstance: function() {
            if (!instance) {
              instance = init();
            }
            return instance;
          },
        };
      })
      let car1 = ShopCar.getInstance()
      let car2 = ShopCar.getInstance()
      car1.buy('橘子');
      car2.buy('苹果')
      console.log(car1.goods)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>