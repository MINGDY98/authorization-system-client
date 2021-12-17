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
    <button
      :disabled="!isUsernameValid || !isPasswordValid"
      type="submit"
      class="btn"
    >
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from "../api/index.js";
import { validateEmail, validatePassword } from "../utils/validation.js";
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
    isPasswordValid() {
      return validatePassword(this.password);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        id: this.username,
        pwd: this.password,
      };
      try {
        const user = await loginUser(userData);
        console.log(user.data.data);

        /*         this.logMessage = `${this.id}님이 로그인하셨습니다..`;
        this.initForm(); */

        this.$store.commit("setUsername", user.data.data.user_id);
        this.$router.push("/main");
      } catch (err) {
        console.log(err, "로그인에 실패하셨습니다.");
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