require('./bootstrap');

import 'es6-promise/auto'
import VueRouter from 'vue-router';
import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import store from './store';
import {sync} from 'vuex-router-sync';
import AppView from './components/App.vue'
import Vuse from 'vuse';
import Uploader from './components/vuse/Uploader.vue'

import section1 from './components/vuse/sections/section1';
import section2 from './components/vuse/sections/section2';
import newsletter from './components/vuse/forms/newsletter';
import hero1 from './components/vuse/hero/hero1';
import hero2 from './components/vuse/hero/hero2';
import hero_funtoplay3 from './components/vuse/hero/hero_funtoplay3';
import social1 from './components/vuse/social/social1';
import social2 from './components/vuse/social/social2';
import social3 from './components/vuse/social/social3';
import social4 from './components/vuse/social/social4';
import pwa from './components/vuse/plugins/pwa';
import layout1 from './components/vuse/layouts/layout1';

Vue.use(VueRouter);
Vue.use(Vuex);

Vuse.mix({
    components: {
        Uploader
    }
});

Vuse.component(section1);
Vuse.component(section2);
Vuse.component(newsletter);
Vuse.component(hero1);
Vuse.component(hero2);
Vuse.component(hero_funtoplay3);
Vuse.component(social1);
Vuse.component(social2);
Vuse.component(social3);
Vuse.component(social4);

Vuse.use(pwa);

Vue.use(Vuse, {
    css: 'css/app.css',
    themes: [
        {
            name: 'Theme 1',
            sections: [hero1, section1, social1, social3, newsletter]
        },
        {
            name: 'Theme 2',
            sections: [hero2, section2, social3, social4, newsletter]
        },
        {
            name: 'Layout 1',
            sections: [layout1]
        },
        {
            name: 'Battle Carnival. Fun to play',
            sections: [hero_funtoplay3]
        }
    ]
});

sync(store, router);

new Vue(
    {
        router: router,
        store: store,
        data: {},
        render: h => h(AppView)
    }
).$mount('#root');
