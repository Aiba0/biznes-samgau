import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import fn from './fn'

Vue.config.productionTip = false

Vue.prototype.$fn = fn

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
