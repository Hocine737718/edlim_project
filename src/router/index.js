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
    component:  () => import('@/views/StatisticsView.vue')
  },
  {
    path: '/article/ressources-humaines',
    name: 'ressources-humaines',
    component:  () => import('@/views/Articles/HrView.vue')
  },
  {
    path: '/article/banque',
    name: 'banque',
    component:  () => import('@/views/Articles/BankView.vue')
  },
  {
    path: '/article/conseil-juridique',
    name: 'conseil-juridique',
    component:  () => import('@/views/Articles/LegalAdviceView.vue')
  },
  {
    path: '/article/developpement-web',
    name: 'developpement-web',
    component:  () => import('@/views/Articles/WebDevelopmentView.vue')
  },
  {
    path: '/article/comptabilite',
    name: 'comptabilité',
    component:  () => import('@/views/Articles/AccountingView.vue')
  },
  /*{
    path: '/candidature-spontanee',
    name: 'candidature-spontanee',
    component:  () => import('@/views/Articles/ApplicationFormView.vue')
  },
  {
    path: '/offres-emploi',
    name: 'offres-emploi',
    component:  () => import('@/views/Articles/JobOffersView.vue')
  },
  {
    path: '/offres/drh',
    name: '/offres/drh',
    component:  () => import('@/views/Articles/DrhView.vue')
  },
  {
    path: '/contact',
    name: '/contact',
    component:  () => import('@/views/Articles/ContactView.vue')
  },
  {
    path: '/devis',
    name: '/devis',
    component:  () => import('@/views/Articles/QuoteView.vue')
  },*/
  {
    path : '/:catchAll(.*)',
    name : '/erreur',
    component : () => import('@/views/ErrorView.vue')
  },
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
