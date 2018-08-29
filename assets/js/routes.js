import Layout from './components/Layout.vue';
import NotFound from './components/NotFound.vue';

import Dashboard from './components/pages/Dashboard.vue';
import Editor from './components/pages/Editor.vue';
import VuseEditor from './components/pages/VuseEditor.vue';

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'Dashboard',
                alias: ''
            },
            {
                path: 'editor',
                component: Editor,
                name: 'Editor',
                alias: ''
            }
        ]
    },
    {
        path: '/404',
        name: '404',
        component: NotFound
    },
    {
        path: '/vuse-editor',
        component: VuseEditor,
        name: 'VuseEditor',
        alias: ''
    }
];

export default routes;