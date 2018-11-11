import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// install router
import VueRouter from 'vue-router'

// install validations
import VeeValidate from 'vee-validate'
import validationConfig  from './config/lang.js'

// module
import routes from './routes.js'

// init plugins
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VeeValidate, validationConfig)


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  base: '/',
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
