import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'

const routes = [
  {path: '/suppliers', component: SuppliersList},
  {path: '/map', component: SuppliersMap},
    {path: '/supplier', component: Supplier},
]

const router = new VueRouter({
  routes
})

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
    libraries: 'places',
  },
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
