// api.js

import axios from 'axios';

// 创建 axios 实例
const api = axios.create({
    baseURL: 'https://668cde0c099db4c579f0afbc.mockapi.io/api/v1', // 你的API基础URL
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
    }
});

// 请求拦截器
api.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么，比如添加token
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
api.interceptors.response.use(
    response => {
        // 对响应数据做些什么
        return response.data;
    },
    error => {
        // 对响应错误做些什么
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在2xx范围内
            switch (error.response.status) {
                case 401:
                    // 未授权，可以做一些处理，比如跳转到登录页面
                    console.log('未授权，请重新登录');
                    break;
                case 403:
                    // 拒绝访问
                    console.log('拒绝访问');
                    break;
                case 404:
                    // 请求地址错误
                    console.log('请求地址错误');
                    break;
                case 500:
                    // 服务器错误
                    console.log('服务器错误');
                    break;
                default:
                    console.log('其他错误信息');
            }
        }
        return Promise.reject(error);
    }
);

export default api;