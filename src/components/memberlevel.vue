<template>
    <div class="bgview">
        <img class="bgv" src="../assets/bgv.png" alt="">
        <div class="infoStack">
            <img class="avator" :src="avator" alt="">
            <div class="nameStack">
                <div>{{ name }}</div>
                <div>{{ level }}</div>
            </div>
        </div>
    </div>

</template>


<script lang="ts">
import { px2rem } from '../utils/rem'

export default {
    name: 'MemberLevel',
    setup() {
     return { px2rem }
    },
    data() {
        return {
            avator: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
            name: '超级会员',
            level: 0,
            progress: 0.3,
            desc: '还需200积分可升级',
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
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(180deg, #312925 30%, #191815 70%);
}
.bgv {
/* `   右上角` */
    position: absolute;
    top: 0;
    right: 0;
}
.infoStack {
    display: flex;
    position: absolute;
    direction: horizontal;
    justify-content: center;
    top: v-bind('px2rem(72)');
    width: 100%;

}
.avator {
    width: v-bind('px2rem(54)');
    height: v-bind('px2rem(54)');
    border-radius: 50%;
}


</style>