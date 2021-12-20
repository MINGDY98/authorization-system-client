<template>
  <div class="reset-pwd-wrapper">
    <form @submit.prevent="submitForm" class="form">
      <template v-if="!checked">
        <form @submit.prevent="verifyPwd">
          <label for="pwd">pwd: </label>
          <input
            id="pwd"
            type="text"
            v-model="pwd"
            placeholder="기존 비밀번호를 입력해주세요."
          />
          <button class="btn" :disabled="!pwd" type="submit">확인</button>
        </form>
      </template>
      <p>{{ checkmessage }}</p>
      <template v-if="completed === 'success'">
        <p>비밀번호를 성공적으로 변경하였습니다.</p>
      </template>
      <template v-else>
        <div>
          <label for="newpwd">newpwd: </label>
          <input
            id="newpwd"
            type="text"
            v-model="newpwd"
            placeholder="새 비밀번호를 입력해주세요."
          />
        </div>
        <div>
          <label for="checkpwd">checkpwd: </label>
          <input
            id="checkpwd"
            type="text"
            v-model="checkpwd"
            placeholder="새 비밀번호를 다시 한 번 입력해주세요."
          />
        </div>
        <p v-if="newpwd && checkpwd && newpwd != checkpwd" class="warning">
          {{ checknewpwdmessage }}
        </p>
        <button
          :disabled="!newpwd || !checkpwd || newpwd != checkpwd"
          type="submit"
          class="btn"
        >
          비밀번호 재설정
        </button>
      </template>
    </form>
  </div>
</template>

<script>
import { verifyPassword, updatePassword } from "../api/index.js";
export default {
  data() {
    return {
      pwd: "",
      newpwd: "",
      checkpwd: "",
      checkmessage: "",
      checked: false,
      completed: "",
      checknewpwdmessage: "새 비밀번호를 다시 확인해주세요.",
    };
  },
  methods: {
    async verifyPwd() {
      const userData = {
        id: this.$store.state.username,
        pwd: this.pwd,
      };
      const result = await verifyPassword(userData);
      this.checkmessage = result.data.message;
      if (result.data.result == "success") {
        this.checked = true;
      }
    },
    async submitForm() {
      const userData = {
        id: this.$store.state.username,
        newpwd: this.checkpwd,
      };
      const result = await updatePassword(userData);
      this.completed = result.data.result;
    },
  },
};
</script>

<style scoped>
.reset-pwd-wrapper {
  min-width: 450px;
}

p {
  font-weight: 600;
}
</style>