<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import MemberLevel from './components/memberlevel.vue';
export default {
  name: 'App',
  components: {
    MemberLevel: MemberLevel,
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
  background: white;
  /* 全屏 */
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>