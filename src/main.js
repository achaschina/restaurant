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

Vue.use(BootstrapVue)
Vue.use(vueResource)
Vue.use(vueRouter)


const router = new vueRouter({
  mode: 'history',
  routes: Routes
}); 

new Vue ({
  el: '#app',
  render: h => h(App),
  router: router
})