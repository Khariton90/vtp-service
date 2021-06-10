import Vue from 'vue'
import App from './App.vue'

import  "bootstrap/dist/css/bootstrap.css"
Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  container: "body",
  duration: 100,
  easing: "linear",
  offset: -75,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
