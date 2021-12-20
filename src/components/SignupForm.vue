<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <h1 class="title">Signup</h1>
      <form @submit.prevent="submitForm" class="form">
        <form @submit.prevent="submitAuthCode" class="info">
          <label for="username">id: </label>
          <template v-if="!checked">
            <input id="username" type="text" v-model="username" />
            <button class="btn" :disabled="!isUsernameValid" type="submit">
              전송
            </button>
          </template>
          <template v-else>
            <div class="checked">{{ this.username }}</div>
          </template>
        </form>
        <P v-if="send === 'existed' && username" class="warning">
          이미 존재하는 계정입니다.
        </P>
        <P v-if="!isUsernameValid && username" class="warning">
          Please enter an email address
        </P>
        <template v-if="!checked">
          <form @submit.prevent="verifyCode">
            <label for="auth">인증번호: </label>
            <input
              :disabled="send !== 'success'"
              id="auth"
              type="text"
              v-model="auth"
            />
            <button class="btn" :disabled="!auth" type="submit">확인</button>
          </form>
        </template>
        <template v-else> 인증이완료되었습니다. </template>
        <p>{{ this.checkMessage }}</p>
        <P v-if="isUsernameValid && username && !auth" class="warning">
          메일로 전송된 인증번호를 입력해주세요.
        </P>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button
          :disabled="!isUsernameValid || !password || !nickname"
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
import { registerUser, sendAuthCode, verifyAuthCode } from "../api/index.js";
import { validateEmail } from "../utils/validation.js";
export default {
  data() {
    return {
      username: "",
      send: "", //메일발송유무
      auth: "",
      checked: false,
      password: "",
      nickname: "",
      logMessage: "",
      checkMessage: "",
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  watch: {
    username: function () {
      //inputText프로퍼티가 계속변하기 때문에 watch에 살피다가 안되라는 단어가 나오면 삭제
      if (this.username === "") {
        this.send = "";
      }
    },
  },
  methods: {
    async submitAuthCode() {
      const userData = {
        id: this.username,
      };
      const result = await sendAuthCode(userData);
      this.send = result.data.result;
    },
    async verifyCode() {
      const userData = {
        input: this.auth,
        id: this.username,
      };
      const result = await verifyAuthCode(userData);
      if (result.data.result === "success") {
        this.checkMessage = "";
        this.checked = true;
      } else {
        //failed
        this.checkMessage = result.data.message;
      }
    },
    async submitForm() {
      const userData = {
        id: this.username,
        pwd: this.password,
        nickname: this.nickname,
      };
      await registerUser(userData);
      await this.$store.dispatch("LOGIN", userData);
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

<style scoped>
.checked {
  font-size: 100%;
  width: 90%;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
}

.info {
  margin-bottom: 18px;
}
</style>