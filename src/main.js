import Vue from 'vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import Routes  from './utilities/router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./styles/style.css"
window.$ = window.jQuery = require('jquery')
import VueCarousel from 'vue-carousel'
// import 'vue-simple-context-menu/dist/vue-simple-context-menu.css'
import './styles/vue-simple-context-menu.css'
import VueSimpleContextMenu from 'vue-simple-context-menu'

Vue.use(BootstrapVue)
Vue.use(vueResource)
Vue.use(vueRouter)
Vue.use(VueCarousel)
Vue.component('vue-simple-context-menu', VueSimpleContextMenu)


const router = new vueRouter({
  mode: 'history',
  routes: Routes
}); 

new Vue ({
  el: '#app',
  render: h => h(App),
  router: router
})