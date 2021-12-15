import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../views/SignupPage.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'signupPage',
      component: SignupPage,
    }
  ]
})