<template>
  <header class="nav">
    <div>
      <router-link :to="logoLink" class="logo"> Main </router-link>
    </div>
    <div>
      <div v-if="isUserLogin" class="right_nav">
        <div
          class="menu-wrapper"
          @mouseover="upHere = true"
          @mouseleave="upHere = false"
        >
          <div class="home">
            <i class="fas fa-home"></i>
            <span class="username">{{ $store.state.username }}</span>
          </div>
          <div class="slide_menu">
            <router-link to="/account">
              <button class="slide_menu_button" v-show="upHere === true">
                계정관리
              </button>
            </router-link>
          </div>
        </div>
        <a href="javascript:;" @click="logoutUser">Logout</a>
      </div>
      <div v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "../../utils/cookies";
export default {
  data() {
    return {
      slide_nav: false,
      upHere: false,
    };
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? "/main" : "/login";
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUsername");
      this.$store.commit("clearToken");
      deleteCookie("auth");
      deleteCookie("user");
      deleteCookie("role");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.nav {
  height: 60px;
  background-color: #46508c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.router-link-exact-active {
  color: #cdd3fa;
}
a {
  margin: 6px;
}
.username {
  color: white;
  font-size: 20px;
  font-weight: 600;
}
i {
  color: #fc6020;
  font-size: 2rem;
}
.right_nav {
  display: flex;
}
.home {
  background-color: #46508c;
  width: 270px;
  display: flex;
  cursor: pointer;
}
.menu-wrapper {
  display: flex;
  align-items: center;
}
.slide_menu {
  position: absolute;
  top: 65px;
  z-index: 1;
  width: 270px;
}
.slide_menu_button {
  width: 100%;
  font-weight: 600;
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
}
span {
  align-self: center;
}
</style>