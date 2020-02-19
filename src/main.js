import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'
import VueLazyload from "vue-lazyload";
import store from './store'


Vue.use(VueLazyload);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
