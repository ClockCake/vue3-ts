<template>
    <div class="login">
        <!-- element UI -->
         <h2>登录</h2>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <div style="text-align: center;">
              <el-button type="primary" @click="login">登录</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import { getUserInfo } from '/src/network/userService';
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        // 获取用户信息
        const userInfo = await getUserInfo();
        console.log('用户信息', userInfo);
      } catch (error) {
        console.error('登录失败', error);
      }
    },
  },
};
</script>

<style>
.login {
  width: 80%; /* 使用百分比宽度，根据屏幕宽度自适应 */
  max-width: 400px; /* 设置最大宽度，避免在大屏设备上过宽 */
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
.el-button {
  width: 50%;
  margin-top: 20px;
}


</style>