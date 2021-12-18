<template>
  <div class="wrapper">
    <ul class="user-list">
      <li class="user">
        <div class="role attribute">권한</div>
        <div class="id attribute">이메일</div>
        <div class="created attribute">계정 생성</div>
        <div class="authorization attribute">권한 부여</div>
      </li>
      <li v-for="(item, index) in userList" :key="index" class="user">
        <small class="role">{{ item.user_role }}</small>
        <div class="id">{{ item.user_id }}</div>
        <small class="created">
          {{ item.created }}
        </small>
        <!--         <div class="authorization">
          <button class="btn" @click="authorize(item.user_id)">승급</button>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    userList() {
      return this.$store.state.admin;
    },
  },
  methods: {
    /*     async authorize(id) {
      try {
        const user = await authorizeUser(id);
      } catch (err) {
        console.log(err);
      }
    }, */
  },
};
</script>

<style scoped>
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

.created {
  color: #888888;
  width: 300px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.id {
  margin: 0;
  width: 300px;
}

.role {
  display: flex;
  width: 200px;
  color: #fc6020;
  justify-content: center;
}

.authorization {
  width: 200px;
}

.wrapper {
  display: flex;
  justify-content: center;
}

.attribute {
  font-weight: bold;
}
</style>