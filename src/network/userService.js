// userService.js

import api from '/src/network/api';
import UserModel from '/src/model/UserModel';
import ApiResponse from '../model/UserModel';

// 获取用户信息
export const getUserInfo = async () => {
    try {
        const response = await api.get(`/getuser`);
        const apiResponse = ApiResponse.fromJson(response);
        if (apiResponse.code === 200) {
            return apiResponse.data; 
        } else {
            throw new Error(apiResponse.msg);
        }
        // return response.map(user => UserModel.fromJson(user));

    } catch (error) {
        console.error('获取用户信息失败', error);
        throw error;
    }
};
