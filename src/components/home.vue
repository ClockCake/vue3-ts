<template>
    <div class="home">
        <h2>欢迎来到首页</h2>
        <el-button type="primary" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
</style>