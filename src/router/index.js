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
    //component:  () => import('@/views/StatisticsView.vue')
    component:  () => import('@/views/InProgressView.vue')
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
    name: 'comptabilite',
    component:  () => import('@/views/Articles/AccountingView.vue')
  },
  {
    path: '/candidature-spontanee',
    name: 'candidature-spontanee',
    component:  () => import('@/views/ApplicationFormView.vue')
    //component:  () => import('@/views/InProgressView.vue')
  },
  {
    path: '/offres-emploi',
    name: 'offres-emploi',
    component:  () => import('@/views/JobOffersView.vue')
    //component:  () => import('@/views/InProgressView.vue')
  },
  {
    path: '/offres/tech-sup-info',
    name: '/offres/tech-sup-info',
    component:  () => import('@/views/Articles/Offers/ComputerTechView.vue')
    //component:  () => import('@/views/InProgressView.vue')
  },
  {
    path: '/contact',
    name: '/contact',
    component:  () => import('@/views/ContactView.vue')
    //component:  () => import('@/views/InProgressView.vue')
  },

  /*---------------------------------------- EN liens -------------------------------------------------*/

  {
    path: '/en',
    name: 'en/home',
    component: () => import('@/views/EN/HomeView.vue')
  },
  {
    path: '/en/about-us',
    name: 'en/about-us',
    component: () => import('@/views/EN/AboutView.vue')
  },
  {
    path: '/en/statistics',
    name: 'en/statistics',
    //component:  () => import('@/views/EN/StatisticsView.vue')
    component:  () => import('@/views/EN/InProgressView.vue')
  },
  {
    path: '/en/article/human-resources',
    name: 'en/human-resources',
    component:  () => import('@/views/EN/Articles/HrView.vue')
  },
  {
    path: '/en/article/bank',
    name: 'en/bank',
    component:  () => import('@/views/EN/Articles/BankView.vue')
  },
  {
    path: '/en/article/legal-advice',
    name: 'en/legal-advice',
    component:  () => import('@/views/EN/Articles/LegalAdviceView.vue')
  },
  {
    path: '/en/article/web-development',
    name: 'en/web-development',
    component:  () => import('@/views/EN/Articles/WebDevelopmentView.vue')
  },
  {
    path: '/en/article/accounting',
    name: 'en/accounting',
    component:  () => import('@/views/EN/Articles/AccountingView.vue')
  },
  {
    path: '/en/application-form',
    name: 'en/application-form',
    component:  () => import('@/views/EN/ApplicationFormView.vue')
    //component:  () => import('@/views/InProgressView.vue')
  },
  {
    path: '/en/job-offers',
    name: 'en/job-offers',
    component:  () => import('@/views/EN/JobOffersView.vue')
    //component:  () => import('@/views/InProgressView.vue')
  },
  {
    path: '/en/offers/computer-tech',
    name: 'en/offers/computer-tech',
    component:  () => import('@/views/EN/Articles/Offers/ComputerTechView.vue')
    //component:  () => import('@/views/InProgressView.vue')
  },
  {
    path: '/en/contact',
    name: 'en/contact',
    component:  () => import('@/views/EN/ContactView.vue')
    //component:  () => import('@/views/InProgressView.vue')
  },
  {
    path : '/en/:catchAll(.*)',
    name : 'en/error',
    component : () => import('@/views/EN/ErrorView.vue')
  },

  /*---------------------------------------- AR liens -------------------------------------------------*/

  {
    path: '/ar',
    name: 'ar/home',
    //component: () => import('@/views/AR/HomeView.vue')
    component:  () => import('@/views/InProgressView.vue')
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
