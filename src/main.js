import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/components/base/_globals'
import '@/components/sections/_globals'

import 'animate.css'
import './assets/fonts/style.css'
import './styles/main.scss'
import OnScrollAnimation from './directives/on-scroll-animation'

Vue.directive('onscrollanimation', OnScrollAnimation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
