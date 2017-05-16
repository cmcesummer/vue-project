// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
import '@/assets/style.css'
import commonReg from '@/assets/js/commonReg'
import $api from '@/assets/js/ajax'
import filter from '@/assets/js/filter'
import FastClick from 'fastclick'


import { Field, Popup, Indicator, Toast } from 'mint-ui'

Vue.component(Popup.name, Popup);
Vue.component(Field.name, Field);

//正则验证
Vue.prototype.commonReg = commonReg;
//axios封装请求
Vue.prototype.$api = $api;
//loading
Vue.prototype.Indicator = Indicator;
//提示层
Vue.prototype.Toast = Toast;

//解决微信中访问SPA应用，路由跳转页面 需要改变title的问题
Vue.use(require('vue-wechat-title'));

Vue.use(MuseUI);

//解决移动端300ms延迟问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false;

//注册vue 滤器
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

