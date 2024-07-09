<template>
  <div id="app">
    <router-view></router-view>

    <!-- <login-in class="login"></login-in> -->
  </div>
</template>


<script>
import Login from './components/login.vue';

export default {
  name: 'App',
  components: {
    LoginIn: Login
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  /* 渐变色背景 */
  background: linear-gradient(45deg, #49a09d, #5f2c82);
  /* 全屏 */
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>