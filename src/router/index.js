import Vue from "vue";

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import SuppliersList from '../components/SuppliersList.vue'
import SuppliersMap from '../components/SuppliersMap.vue'

const routes = [
    {path: '/suppliers', component: SuppliersList},
    {path: '/map', component: SuppliersMap},

]

const router = new VueRouter({
    routes
})

export default router;