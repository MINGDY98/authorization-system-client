<template>
  <div>
    <login-form></login-form>
    <div>
      <router-link to="/findpwd" class="find">비밀번호 찾기</router-link>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.find {
  font-size: 12px;
  color: black;
  display: flex;
  justify-content: center;
}
</style>