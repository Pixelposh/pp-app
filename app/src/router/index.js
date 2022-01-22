import { createRouter, createWebHistory } from 'vue-router';
import ViewHome from '../views/ViewHome.vue';

const routes = [
  {
    path: '/',
    name: 'ViewHome',
    component: ViewHome,
  },
  {
    path: '/cookies',
    name: 'ViewCookies',
    component: () => import('../views/ViewCookies.vue'),
  },
  {
    path: '/privacy',
    name: 'ViewPrivacy',
    component: () => import('../views/ViewPrivacy.vue'),
  },
  {
    path: '/help-center',
    name: 'ViewHelpCenter',
    component: () => import('../views/ViewHelpCenter.vue'),
  },
  {
    path: '/terms',
    name: 'ViewTerms',
    component: () => import('../views/ViewTerms.vue'),
  },
  {
    path: '/user/profile',
    name: 'ViewProfile',
    component: () => import('../views/user/ViewProfile.vue'),
  },
  {
    path: '/user/dashboard',
    name: 'ViewDashboard',
    component: () => import('../views/user/ViewDashboard.vue'),
  },
  {
    path: '/user/sign_in',
    name: 'ViewSignIn',
    component: () => import('../views/user/ViewSignIn.vue'),
  },
  {
    path: '/user/sign_up',
    name: 'ViewSignUp',
    component: () => import('../views/user/ViewSignUp.vue'),
  },
  {
    path: '/user/lost_password',
    name: 'ViewLostPassword',
    component: () => import('../views/user/ViewLostPassword.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
