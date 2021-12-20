<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <h1 class="title">login</h1>
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
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
        >
          로그인
        </button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import {} from "../css/common.css";
import { validateEmail } from "../utils/validation.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      logMessage: "",
      passwordMessage:
        "비밀번호는 8자 이상 20자 이하여야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          id: this.username,
          pwd: this.password,
        };
        await this.$store.dispatch("LOGIN", userData);
        this.$router.push("/main");
      } catch (err) {
        console.log(err, "로그인에 실패하셨습니다.");
        this.logMessage = "이메일 혹은 비밀번호를 다시 확인해주세요.";
      }
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