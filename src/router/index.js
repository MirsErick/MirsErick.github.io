import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: '',
        redirect: '/home',
        component: () => import('@/layout/index.vue'),
        children:[
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/Home.vue'),
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('@/views/About.vue')
            }
        ]
    }
];

export default new VueRouter({
    routes,
    mode: "hash"
})
