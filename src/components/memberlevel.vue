<template>
    <div class="bgview">
        <img class="bgv" src="../assets/bgv.png" alt="">
        <div class="fullVStack">
            <div id="infoStack">
                <img class="avatar" :src="avatar" alt="">
                <div class="nameVStack">
                    <div class="levelHStack">
                        <span id="name">{{ name }}</span>
                        <img id="level" src="../assets/level.png" alt="">
                    </div>
                    <div>
                        <progress :value="progress" max="1"></progress>                    
                    </div>
                    <div class="desc">
                        <span>{{ desc }}</span>
                        <span>V.2</span>
                    </div>
                </div>
            </div>
            <div class="memberPrivileges">
                <h2>会员特权</h2>
                <div class="privilegesGrid">
                    <div v-for="(membership, index) in memberships" :key="index" class="privilegeItem">
                        <img :src="membership.image" :alt="membership.name">
                        <h3>{{ membership.name }}</h3>
                        <p>{{ membership.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { ptToRem } from '../utils/rem'

export default {
    name: 'MemberLevel',
    setup() {
     return { ptToRem }
    },
    data() {
        return {
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
            name: '超级会员',
            level: 1,
            progress: 0.5,
            desc: '还需200积分可升级',
            memberships: [
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc:  '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                
            ]
        }
    },
};
</script>


<style scoped>
body {
    margin: 0;
    padding: 0;
    background-color: black;
}
.bgview {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: linear-gradient(180deg, #312925 30%, #191815 70%);
}
.bgv {
/* `   右上角` */
    position: absolute;
    top: 0;
    right: 0;

}
.fullVStack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative; 
    z-index: 1; 
}
#infoStack {
    display: flex;
    margin-top: v-bind('ptToRem(64)');
    flex-direction: row;
    justify-content: flex-start;
    top: v-bind('ptToRem(72)');
    width: 100%;
    padding-right: v-bind('ptToRem(20)'); /* 添加右边距 */
    box-sizing: border-box; /* 确保padding不会增加总宽度 */

}
.avatar {
    width: v-bind('ptToRem(54)');
    height: v-bind('ptToRem(54)');
    border-radius: 50%;
    margin-left: v-bind('ptToRem(20)');
}
.nameVStack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: v-bind('ptToRem(20)');
    width: calc(100% - v-bind('ptToRem(94)')); /* 减去头像宽度和边距 */

}
.levelHStack {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
#name{
    color: white;
    /* 中粗体 15pt */
    font: normal normal 15px/18px PingFang SC;
}
#level {
    width: v-bind('ptToRem(50)');
    height: v-bind('ptToRem(20)');
    margin-left: v-bind('ptToRem(10)');
}
progress {
    width: 100%;
    height: v-bind('ptToRem(5)');
    border-radius: v-bind('ptToRem(2.5)');
    background-color: #66625C;

}
/* 填充色（进度条颜色） */
progress::-webkit-progress-value {
    background-color: #FACEA3; /* 设置您想要的填充颜色 */
    border-radius: v-bind('ptToRem(2.5)');
}
.desc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: v-bind('ptToRem(10)');
    color: white;
    font: normal normal 12px/14px PingFang SC;
}

.memberPrivileges {
    margin-top: v-bind('ptToRem(30)');
    padding: v-bind('ptToRem(20)');
    overflow-y: auto; /* 启用垂直滚动 */
    background-color: white;
    border-radius: v-bind('ptToRem(20)') v-bind('ptToRem(20)') 0 0;
    flex: 1; /* 让它占据 fullVStack 中的剩余空间 */
    display: flex;
    flex-direction: column;
}

.memberPrivileges h2 {
    color: #FACEA3;
    text-align: center;
    font-size: v-bind('ptToRem(18)');
    margin-bottom: v-bind('ptToRem(20)');
}

.privilegesGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: v-bind('ptToRem(20)');
}

.privilegeItem {
    background-color: rgba(255, 255, 255, 0.1);
    text-align: center;
}

.privilegeItem img {
    width: v-bind('ptToRem(83)');
    height: v-bind('ptToRem(83)');
}

.privilegeItem h3 {
    color: #333333 100%;
    font-size: v-bind('ptToRem(12)');
    font-bold: bold;
    margin-bottom: v-bind('ptToRem(5)');
}

.privilegeItem p {
    color: #999999;
    font-size: v-bind('ptToRem(10)');
}
</style>