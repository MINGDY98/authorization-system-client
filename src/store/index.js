import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  getRoleFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
  saveRoleToCookie
} from '../utils/cookies';
import { fetchUserList, loginUser } from '../api/index.js';
Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
    role: getRoleFromCookie() || '',
    admin: [],
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    }
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = "";
    },
    setToken(state, token) {
      state.token = token;
    },
    setRole(state, role) {
      state.role = role;
    },
    setAdmin(state, admin) {
      state.admin = admin;
    },

  },
  actions: {
    FETCH_ADMIN(context) {
      fetchUserList()
        .then(response => {
          context.commit('setAdmin', response.data.data);
          return response.data.data;
        })
        .catch(error => console.log(error));
    },
    async LOGIN({ commit }, userData) {
      const response = await loginUser(userData);
      console.log(response);
      commit("setToken", response.data.token.token);
      commit("setUsername", response.data.data.user_id);
      commit("setRole", response.data.data.user_role);
      saveAuthToCookie(response.data.token.token);
      saveUserToCookie(response.data.data.user_id);
      saveRoleToCookie(response.data.data.user_role);
      return response.data;
    }
  }

})