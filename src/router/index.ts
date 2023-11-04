import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';
import GifDetail from '../views/GifDetail/GifDetail.vue';
import UserPage from '../views/UserPage/UserPage.vue';

const routes = [
  {
    path: '/giffy',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/gif/:id',
    name: 'GifDetail',
    component: GifDetail
  },
  {
    path: '/user/:username/:id/',
    name: 'UserPage',
    component: UserPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
