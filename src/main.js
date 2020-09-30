import Vue from 'vue'
import $ from 'jquery'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUi from 'element-ui'
import store from '@/store'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$ = $
Vue.use(VueRouter),
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
