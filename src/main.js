import 'es6-promise/auto'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Vuex from 'vuex'

import '@components/_globals'

import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import AppView from './App.vue'
import VueCircleSlider from 'vue-circle-slider'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueCircleSlider)

sync(store, router)

new Vue(
  {
    router: router,
    store: store,
    data: {},
    render: h => h(AppView)
  }
).$mount('#root')
