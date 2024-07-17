<template>
<div class="warp">
    <div class="image-container">
        <img src="../assets/scoreBV.png" alt="" class="background-image">
        
            <div class="overlay">
              <img src="../assets/invite_text.png" alt="" class="text-image">
              <div class="redPocketContainer">
                <img src="../assets/RedPocket.png" alt="" class="redPocketBV">
                <!-- 在这里添加redPocketBV的子视图 -->
                <div class="redPocketContent">
                    <div>每邀请1名极家汇新用户注册登录您得</div>
                    <div class="price">388</div>
                    <div>极家汇积分</div>
                    <div><button>立即邀请</button></div>                    
                </div>

              </div>
              <img src="../assets/left-score.png" alt="" class="left-score">
              <img src="../assets/right-score.png" alt="" class="right-score">
        
            </div>
            
      </div>
    
      <div class="middleVStack">
        <h2>玩法攻略</h2>
    
      </div>

</div>
</template>

<script lang="ts">
import { ptToRem} from '../utils/rem'

export default {
    name: 'GetScore',
    setup() {
     return { ptToRem }
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
    overflow: hidden;
    display: flex;
    flex-direction: column;

}

.image-container {
  position: relative;
  width: 100%;
  height: 60%;

}

.background-image{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

}
.text-image {
    position: relative;
    top: v-bind('ptToRem(72)');
  /* 两边间距各 66 */
    margin-left: v-bind('ptToRem(66)');
    margin-right: v-bind('ptToRem(66)');
}

.redPocketContainer {
  position: relative;
  top: v-bind('ptToRem(92)');
  margin-left: v-bind('ptToRem(16)');
  margin-right: v-bind('ptToRem(16)');
}

.redPocketBV {
  width: 100%;
  height: v-bind('ptToRem(284)');
  position: absolute;
}
.redPocketContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: v-bind('ptToRem(16)');
}
.redPocketContent div {
    font-size: v-bind('ptToRem(12)');
    color: #631814;
    text-align: center;
    z-index: 1;
}
.redPocketContent .price {
    color: #F1223F;
    text-align: center;
    z-index: 1;
    /* 字号 17pt */
    font-size: v-bind('ptToRem(70)');
    font-weight: bold;;
}
button {
    /* 左边间距 60; */
    width: v-bind('ptToRem(220)');
    height: v-bind('ptToRem(48)');
    /* 背景色从左到右渐变 #FFFCE3 30 %  #FFF49E 70%*/
    background: linear-gradient(to right, #FFFCE3, #FFF49E);
    color: #F12222;
    border-radius: v-bind('ptToRem(24)');
    border: none;
    font-size: v-bind('ptToRem(16)');
    font-weight: bold;
    margin-top: v-bind('ptToRem(48)');
}
.left-score {
    position: absolute;
    top: v-bind('ptToRem(350)');
    left: 0;
    width: v-bind('ptToRem(40)');
    height: v-bind('ptToRem(70)');
}
.right-score {
    position: absolute;
    top: v-bind('ptToRem(250)');
    right: 0;
    width: v-bind('ptToRem(32)');
    height: v-bind('ptToRem(32)');
}
.middleVStack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    background: linear-gradient(180deg, #FFE0DC 10%, #FFFFFF 90%);
    margin-top: v-bind('ptToRem(32)');
    width: 100vw;
    height: v-bind('ptToRem(166)');
}
h2 {
    color: #631814;
    font-size: v-bind('ptToRem(18)');
    font-weight: bold;
    text-align: center;
}

</style>