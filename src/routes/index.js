import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../views/SignupPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import MainPage from '../views/MainPage.vue';
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'signupPage',
      component: SignupPage,
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '*',
      component: NotFoundPage,
    },
  ]
})