<template>
  <div class="contents">
    <div class="account-wrapper">
      <div class="manage-list">
        <ul class="user-list">
          <li class="user">
            <div>권한</div>
          </li>
        </ul>
      </div>
      <reset-pwd></reset-pwd>
    </div>
  </div>
</template>

<script>
import ResetPwd from "../components/ResetPwd.vue";
export default {
  components: {
    ResetPwd,
  },
  data() {
    return {
      resetpwd: "",
    };
  },
};
</script>

<style scoped>
.contents {
  margin-top: 50px;
}
.account-wrapper {
  border-radius: 3px;
  padding: 30px;
  background-color: #cdd3fa;
  display: flex;
}

.user-list {
  margin: 0;
  padding: 0;
}
.user {
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.manage-list {
  min-width: 180px;
  margin-right: 80px;
}
</style>