<template>
  <div>
    <div>
      <h1>{{ $store.state.username }}님 환영합니다.</h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    //관리자는 user의 정보를 가져온다.
    const role = this.$store.state.role;
    if (role === "관리자") {
      this.$store.dispatch("FETCH_ADMIN");
    } else {
      //일반유저일경우.
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>