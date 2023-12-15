import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8080/api"
export const Api = axios.create({
    baseURL: BASE_URL, // 你的API基础URL
    timeout: 5000, // 请求超时时间
    headers: {
        // "Content-Type": "application/json",
    },
})

Api.interceptors.response.use(
    response => {
        // 在这里处理正常的响应
        console.log(response)
        return response;
    },
    error => {
        // if (error.response) {
        //     const status = error.response.status;

        //     return Promise.reject(error);
        // }
        console.log(error)
        return Promise.reject(error)
    }
)