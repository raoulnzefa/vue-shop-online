import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

console.log('解决了冲突');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
