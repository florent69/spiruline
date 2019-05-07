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

import Vuex from 'vuex'
Vue.use(Vuex);
import axios from "axios";


// Exemple de la doc Vuex //
const store = new Vuex.Store({
  state: {
    suppliers: [],
    loading: false,
    error: false,
  },
  actions: {
    suppliersLoading: context => {
       axios
          .get('https://api-suppliers.herokuapp.com/api/suppliers')
          .then(response => {
            // console.log(response)
            context.state.suppliers = response.data
            // console.log(context.state.suppliers)
          })
          .catch(error => {
           context.state.error = true
          })
          .finally(() => context.state.loading = false)
    },
  }

});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')