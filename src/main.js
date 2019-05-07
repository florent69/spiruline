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
      currentLocation: {
          lat: 46,
          lng: 7
      },
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
          geolocation : context => {
              navigator.geolocation.getCurrentPosition((position) => {
                  context.state.currentLocation = {
                      lat: parseFloat(position.coords.latitude),
                      lng: parseFloat(position.coords.longitude)
              }
          })
    }

      },

getters: {
    suppliers: state => state.suppliers,
    loading: state => state.loading,
    error: state => state.error,
    currentLocation: state => state.currentLocation,
},
    mutations: {
        SET_CURRENT_LOCATION: (state, position) => {
            state.currentLocation = position;
        },
    },


});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')