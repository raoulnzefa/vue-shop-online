import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

console.log('dev分支修改了代码');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
