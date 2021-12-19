<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div class="info">
          <input
            id="username"
            type="text"
            v-model="username"
            placeholder="찾고싶은 계정의 이메일을 입력해주세요."
          />
        </div>
        <button type="submit" class="btn">임시비밀번호 발송</button>
      </form>
    </div>
  </div>
</template>
<script>
import { findPwd } from "../api/index.js";
export default {
  data() {
    return {
      username: "",
      send: false,
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        id: this.username,
      };
      await findPwd(userData);
      this.send = true;
    },
  },
};
</script>
<style>
</style>