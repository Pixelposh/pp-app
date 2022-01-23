import { createRouter, createWebHistory } from 'vue-router';
import ViewHome from '../views/ViewHome.vue';
import { auth } from '../core/firebase/config';

const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  if(!user) {
    next({ name: 'ViewSignIn' })
  } else {
    next();
  }
}

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
    beforeEnter: requireAuth
  },
  {
    path: '/user/collection',
    name: 'ViewCollection',
    component: () => import('../views/user/ViewCollection.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/user/sign-in',
    name: 'ViewSignIn',
    component: () => import('../views/user/ViewSignIn.vue'),
  },
  {
    path: '/user/sign-up',
    name: 'ViewSignUp',
    component: () => import('../views/user/ViewSignUp.vue'),
  },
  {
    path: '/user/lost-password',
    name: 'ViewLostPassword',
    component: () => import('../views/user/ViewLostPassword.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
