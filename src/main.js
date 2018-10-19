// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import Vuetify from 'vuetify'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// CSS
import 'vuetify/dist/vuetify.min.css';
import './css/hack.css';
import './css/loader.css';
import './css/main.css';

Vue.use(Vuetify),
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
