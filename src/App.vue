<template>
  <div id="app">
  <el-row>
    <el-col :span="24"><div class="firstRow">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div></el-col>
  </el-row>
  </div>
</template>


<script>
export default {
  name: 'App'
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
/* #app {
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

} */
.firstRow {
  background-color: lightgray;
  border-radius: 4px;
  min-height: 48px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
}
</style>