<template>
  <header class="nav">
    <div>
      <router-link to="/" class="logo"> Main </router-link>
    </div>
    <div>
      <template v-if="isUserLogin">
        <span class="username">{{ $store.state.username }}</span>
        <a href="javascript:;" @click="logoutUser">Logout</a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUsername");
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
  color: pink;
}
a {
  margin: 6px;
}
.username {
  color: white;
  font-size: 20px;
  font-weight: 600;
}
</style>