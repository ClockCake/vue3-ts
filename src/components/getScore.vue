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
        <div class="detailHStack">
          <div class="personalVStack">
            <img src="../assets/invite-icon.png" alt="">
            <div class="dot-container">
                <span class="dot">1</span>
                <span class="dot-text">分享活动</span>
            </div>
            <div class="desc">分享活动页给好友</div>
          </div>
          <img src="../assets/right-arrow.png" alt="">
          <div class="personalVStack">
            <img src="../assets/register-icon.png" alt="">
            <div class="dot-container">
                <span class="dot">2</span>
                <span class="dot-text">好友完成</span>
            </div>
            <div class="desc">好友注册登录APP</div>
          </div>
          <img src="../assets/right-arrow.png" alt="">
          <div class="personalVStack">
            <img src="../assets/reward-icon.png" alt="">
            <div class="dot-container">
                <span class="dot">3</span>
                <span class="dot-text">领取奖励</span>
            </div>
            <div class="desc">APP查看获得积分</div>
          </div>
        </div>
      </div>
      
      <div class="bottomVStack">
        <h2>已邀请好友</h2>
        <ul>
          <li v-for="(friend, index) in invitedFriends" :key="index">
            <img :src="friend.avatar" alt="">
            <div>
              <span>{{ friend.name }}</span>

              <h1>{{ friend.time }}</h1>
            </div>
          </li>
        </ul>
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
    data() {
        return {
            invitedFriends: [
              {
                name: '张三',
                avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                time: '2021-08-01 12:00:00'
              },
              {
                name: '李四',
                avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
                time: '2021-08-01 12:00:00'
              },
              {
                name: '王五',
                avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
                time: '2021-08-01 12:00:00'
              }
            ]
        }
    }
    
}
</script>

<style scoped>
.warp {
    /* 渐变色背景 */
    background: white;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    min-height: 100vh;
    overflow-y: auto; /* 允许垂直滚动 */
    overflow-x: hidden; /* 防止水平滚动 */
}

.image-container {
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: visible; /* 允许内容溢出 */

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
  /* padding-top: v-bind('ptToRem(40)');  */


}
.text-image {
    position: relative;
    top: v-bind('ptToRem(72)');
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
    margin-top: v-bind('ptToRem(48)');
    height: v-bind('ptToRem(166)');
    margin-left: v-bind('ptToRem(16)');
    margin-right: v-bind('ptToRem(16)');
    border-radius: v-bind('ptToRem(8)');
}
h2 {
    color: #631814;
    font-size: v-bind('ptToRem(18)');
    font-weight: bold;
    text-align: center;
}
.detailHStack {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.personalVStack {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.personalVStack img {
    width: v-bind('ptToRem(40)');
    height: v-bind('ptToRem(40)');
}

.dot-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.dot {
    width: v-bind('ptToRem(14)');
    height: v-bind('ptToRem(14)');
    background-color: #632D14;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: v-bind('ptToRem(14)'); /* 设置为与高度相同 */

}
.dot-text {
    font-size: v-bind('ptToRem(10)');
    color: #631814;
    font-weight: bold;
    margin-left: v-bind('ptToRem(4)');
}

.personalVStack div {
    font-size: v-bind('ptToRem(8)');
    color: #967775;
}
.personalVStack .desc {
    margin-top: v-bind('ptToRem(4)');
}
.bottomVStack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    background: linear-gradient(180deg, #FFE0DC 10%, #FFFFFF 90%);
    margin-left: v-bind('ptToRem(16)');
    margin-right: v-bind('ptToRem(16)');
    border-radius: v-bind('ptToRem(8)');
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: v-bind('ptToRem(16)');
    border-bottom: 1px solid #F0F0F0;
}
li img {
    width: v-bind('ptToRem(40)');
    height: v-bind('ptToRem(40)');
    border-radius: 50%;
}
li div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: v-bind('ptToRem(8)');
}
li div span {
    font-size: v-bind('ptToRem(14)');
    color: #967775;
    font-weight: bold;
}
li div h1 {
    font-size: v-bind('ptToRem(12)');
    color: #967775;
    margin-top: 0px;
}
</style>