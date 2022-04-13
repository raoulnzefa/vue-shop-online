import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

console.log('ggg再次改动main.js文件');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
