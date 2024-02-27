import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/qui-somme-nous',
    name: 'qui-somme-nous',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/statistiques',
    name: 'statistiques',
    component: () => import('@/views/StatisticsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
