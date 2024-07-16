<template>
<div class="warp">
    <div class="image-container">
        <img src="../assets/scoreBV.png" alt="" class="background-image">
        <div class="overlay">
            <!-- 这里放置你想要添加的内容 -->
             <div>邀请用户领积分</div>
             <img src="../assets/RedPocket.png" alt="">
        </div>
    </div>
    <div class="middle"></div>
    <div class="bottomList"></div>
</div>
</template>

<script lang="ts">
import { px2rem } from '../utils/rem'

export default {
    name: 'GetScore',
    setup() {
     return { px2rem }
    },
    
}
</script>

<style scoped>
.warp {
    /* 渐变色背景 */
    background: white;
    /* 全屏 */
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
}

.image-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* 添加其他样式，如背景色、透明度等 */
}
.overlay div {
    font-size: v-bind('px2rem(16)');
    color: black;
    margin-top: 100px;
    text-align: center;
}
</style>