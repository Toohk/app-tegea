import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store'
import './registerServiceWorker'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
