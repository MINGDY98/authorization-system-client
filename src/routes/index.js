import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../views/SignupPage.vue';
import FindPwdPage from '../views/FindPwdPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import MainPage from '../views/MainPage.vue';
import store from '../store/index';
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: () => {
        if (!store.getters.isLogin) {
          return '/login';
        } else {
          return '/main';
        }
      }
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
      path: '/findpwd',
      name: 'findPwdPage',
      component: FindPwdPage,
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage,
      meta: { auth: true },
    },
    {
      path: '*',
      component: NotFoundPage,
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return;
  }
  next();
});