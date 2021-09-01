import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Map from './components/Map.vue'
import Contact from './components/Contact.vue'

import SuppliersList from './components/SuppliersList.vue'
import ResellersList from './components/ResellersList.vue'
import CustomersList from './components/CustomersList.vue'
import OrdersList from './components/OrdersList.vue'
import Supplier from './components/Supplier.vue'
import Reseller from './components/Reseller.vue'
import Customer from './components/Customer.vue'
import Order from './components/Order.vue'

import AddCustomer from './components/AddCustomer.vue'
import UpdateCustomer from './components/UpdateCustomer.vue'

import addReseller from './components/addReseller.vue'
import ResellerUpdate from './components/ResellerUpdate.vue'

import EditSupplier from "./components/EditSupplier.vue";
import AddSupplier from "./components/AddSupplier.vue";

import AddOrder from './components/AddOrder.vue'
import UpdateOrder from './components/UpdateOrder.vue'

// Map Leaflet
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false;

// Correctif probleme icones
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// Framework CSS
import Buefy from 'buefy'; //after from is what the name of the folder stocked at nodes folder
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy);

// import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';
//
// Vue.use(VueFilterDateParse);

import moment from 'moment';


Vue.use(moment);


const routes = [
  { path: '/', component: Home, name:'home' }, //route pour l'accueil qui affiche le composant Home
  { path: '/suppliers', component: SuppliersList, name: 'Suppliers', props: true }, //route pour suppliers qui affiche le composant SuppliersList
  { path: '/resellers', component: ResellersList, name: 'Resellers', props: true }, //route pour resellers qui affiche le composant ResellersList
  { path: '/customers', component: CustomersList, name: 'Customers', props: true }, //route pour customers qui affiche le composant CustomersList
  { path: '/orders', component: OrdersList, name: 'Orders', props: true }, //route pour orders qui affiche le composant OrdersList
  { path: '/map', component: Map, name: 'map', props: true, }, //route qui affiche la map
  { path: '/contact', component:Contact, name: 'Contact', props: true }, //route pour le formulaire de contact

    // CRUD Customer
  { path: '/customer/:id', component: Customer, name: 'Customer', props: true }, // Read
  { path: '/customer/add', component: AddCustomer, name: 'AddCustomer', props: true }, // Create
  { path: '/customer/update/:id', component: UpdateCustomer, name: 'UpdateCustomer', props: true }, // Update

    // CRUD Reseller
  { path: '/reseller/:id', component: Reseller, name: 'Reseller', props: true },
  { path: '/reseller/add', component: addReseller, name: 'addReseller', props: true },
  { path: '/reseller/update/:id', component: ResellerUpdate, name: 'ResellerUpdate', props: true },

  // CRUD Supplier
  { path: '/supplier/:id', component: Supplier, name: 'Supplier', props: true },
  { path: '/supplier/add', component: AddSupplier, name: 'AddSupplier', props: true },
  { path: '/supplier/edit', component: EditSupplier, name: 'EditSupplier', props: true },

// CRUD Order
  { path: '/order/:id', component: Order, name: 'Order', props: true },
  { path: '/order/add', component: AddOrder, name: 'AddOrder', props: true },
  { path: '/order/update/:id', component: UpdateOrder, name: 'UpdateOrder', props: true },
]

const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
