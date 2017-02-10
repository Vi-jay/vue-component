// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import wj_component from './wj_component.js';

/* eslint-disable no-new */
Vue.use(wj_component.wj_component);
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
