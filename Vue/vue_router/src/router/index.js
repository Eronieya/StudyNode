import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '@/views/About';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home'),
            /* props: (route) => ({
                id: route.params.id
            }), */
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})