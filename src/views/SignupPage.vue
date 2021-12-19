<template>
  <div>
    <SignupForm></SignupForm>
    <div>
      <router-link to="/findpwd" class="find">비밀번호 찾기</router-link>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
export default {
  components: {
    SignupForm,
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