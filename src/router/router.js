import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/counter',
        name: 'CounterView',
        component: CounterView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;