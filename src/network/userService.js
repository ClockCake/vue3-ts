// userService.js

import api from '/src/network/api';
import UserModel from '/src/model/UserModel';

// 获取用户信息
export const getUserInfo = async () => {
    try {
        const response = await api.get(`/user`);
        // return UserModel.fromJson(response);
        return response.map(user => UserModel.fromJson(user));

    } catch (error) {
        console.error('获取用户信息失败', error);
        throw error;
    }
};

// 更新用户信息
export const updateUserInfo = async (userId, data) => {
    try {
        const response = await api.put(`/user/${userId}`, data);
        return UserModel.fromJson(response);
    } catch (error) {
        console.error('更新用户信息失败', error);
        throw error;
    }
};

// 创建新用户
export const createUser = async (data) => {
    try {
        const response = await api.post('/user', data);
        return UserModel.fromJson(response);
    } catch (error) {
        console.error('创建用户失败', error);
        throw error;
    }
};