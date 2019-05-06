import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
    libraries: 'places',
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')