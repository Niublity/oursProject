// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
//引入elementui
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
//引入axios
import axios from "axios"
import VueAxios from "vue-axios"
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: {App},
  template: '<App/>'
})
