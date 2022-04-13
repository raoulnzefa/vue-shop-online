import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

console.log('hhh分支也改变了代码');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
