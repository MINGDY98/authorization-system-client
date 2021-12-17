<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/common/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
</style>
