import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeVue.vue';
import ProductsView from '../views/ProductsVue.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;