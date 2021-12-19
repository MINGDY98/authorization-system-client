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
        <p v-if="!isPasswordValid && password" class="warning">
          {{ passwordMessage }}
        </p>
        <button
          :disabled="!isUsernameValid || !isPasswordValid"
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
.contents {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 5px;
  width: 100%;
}
.form-wrapper {
  background: white;
  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  padding: 15px 15px;
  background-color: pink;
}
.form-wrapper.form-wrapper-sm {
  max-width: 500px;
  margin: 40px auto;
  display: flex;
}

.info {
  justify-content: center;
}
.form {
  width: 100%;
  height: 100%;
  justify-content: center;
}
.warning {
  color: #ff4057;
  margin: 0;
  font-size: 9px;
}

.form label {
  width: 100%;
  display: block;
  margin-bottom: 0.5rem;
  color: #364f6b;
  font-size: 90%;
}
.form input {
  font-size: 100%;
  width: 90%;
  border: 1px solid white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
}
.btn {
  font-weight: 600;
  font-size: 14px;
  background-color: #46508c;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}
.btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.title {
  margin-right: 20px;
}
</style>