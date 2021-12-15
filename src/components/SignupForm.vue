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
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import { registerUser } from "../api/index.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    submitForm() {
      console.log("폼 제출");
      const userData = {
        id: this.username,
        pwd: this.password,
        nickname: this.nickname,
      };
      registerUser(userData)
        .then(function (response) {
          console.log("응답", response);
        })
        .catch((error) => {
          console.log("error : ", error.response);
        });
    },
  },
};
</script>

<style>
</style>