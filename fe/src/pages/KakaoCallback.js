import { jsx as _jsx } from "react/jsx-runtime";
// src/pages/KakaoCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/api/axiosInstance";
import useAuthStore from "@/stores/authStore";
const KakaoCallback = () => {
    const navigate = useNavigate();
    const { setUser } = useAuthStore();
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // 백엔드로 인증 코드 전달
                const response = await axiosInstance.get("/auth/kakao/callback", {
                    withCredentials: true, // 쿠키 기반 인증
                });
                if (response.data.success) {
                    // Zustand 상태에 사용자 정보 저장
                    setUser(response.data.data.user);
                    console.log("로그인 성공:", response.data.data.user);
                    navigate("/"); // 홈으로 이동
                }
                else {
                    console.error("로그인 실패:", response.data.message);
                    navigate("/"); // 실패 시 홈으로 이동
                }
            }
            catch (error) {
                console.error("로그인 처리 실패:", error);
                navigate("/"); // 실패 시 홈으로 이동
            }
        };
        fetchUserData();
    }, [navigate, setUser]);
    return _jsx("p", { children: "\uB85C\uADF8\uC778 \uCC98\uB9AC \uC911..." });
};
export default KakaoCallback;
