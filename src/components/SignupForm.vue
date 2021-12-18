<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <h1 class="title">Signup</h1>
      <form @submit.prevent="submitForm" class="form">
        <div class="info">
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <P v-if="!isUsernameValid && username" class="warning">
          Please enter an email address
        </P>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <p v-if="!isPasswordValid && password" class="warning">
          {{ passwordMessage }}
        </p>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button
          :disabled="!isUsernameValid || !isPasswordValid || !nickname"
          type="submit"
          class="btn"
        >
          회원가입
        </button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../api/index.js";
import { validateEmail, validatePassword } from "../utils/validation.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      logMessage: "",
      passwordMessage:
        "비밀번호는 8자 이상 20자 이하여야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
    isPasswordValid() {
      return validatePassword(this.password);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        id: this.username,
        pwd: this.password,
        nickname: this.nickname,
      };
      await registerUser(userData);
      this.$router.push("/main");
    },
    initForm() {
      this.username = "";
      this.password = "";
      this.nickname = "";
    },
  },
};
</script>

<style>
</style>