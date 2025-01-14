import axios from "axios";
// Vite 환경 변수 사용
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8001";
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // 쿠키 기반 인증
    headers: {
        "Content-Type": "application/json",
    },
});
export default axiosInstance;
