<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <p v-if="!isPasswordValid">{{ passwordMessage }}</p>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button
      :disabled="!isUsernameValid || !isPasswordValid || !nickname"
      type="submit"
    >
      회원가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
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
      const result = await registerUser(userData);
      console.log(result);

      this.logMessage = `${this.nickname}님이 가입되었습니다.`;
      this.initForm();
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