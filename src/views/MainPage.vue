<template>
  <div>
    <admin></admin>
  </div>
</template>

<script>
import Admin from "../components/Admin.vue";
export default {
  components: {
    Admin,
  },
  created() {
    //관리자는 user의 정보를 가져온다.
    const role = this.$store.state.role;
    if (role === "관리자") {
      this.$store.dispatch("FETCH_ADMIN");
    } else {
      //일반or 특별유저일경우.
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>