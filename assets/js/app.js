require('./bootstrap');

import 'es6-promise/auto'
import VueRouter from 'vue-router';
import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import store from './store';
import {sync} from 'vuex-router-sync';

import Toasted from 'vue-toasted';

import AppView from './components/App.vue'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Toasted);

sync(store, router);

new Vue(
    {
        router: router,
        store: store,
        data: {},
        render: h => h(AppView)
    }
).$mount('#root');