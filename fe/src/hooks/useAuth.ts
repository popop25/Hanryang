import { useState } from "react";
import { kakaoLogin, logout } from "../api/authApi";

interface KakaoLoginResponse {
  id: string;
  email: string;
  name: string;
  accessToken: string;
}

export const useAuth = () => {
  // `user`의 타입을 KakaoLoginResponse 또는 null로 지정
  const [user, setUser] = useState<KakaoLoginResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleKakaoLogin = async (token: string) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await kakaoLogin(token); // 반환 타입이 KakaoLoginResponse로 추론됨
      setUser(userData);
      console.log("로그인 성공:", userData);
    } catch (err) {
      console.error("로그인 실패:", err);
      setError("로그인 실패");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await logout();
      setUser(null);
      console.log("로그아웃 성공");
    } catch (err) {
      console.error("로그아웃 실패:", err);
      setError("로그아웃 실패");
    } finally {
      setLoading(false);
    }
  };

  return {
    user, // 사용자 데이터 (KakaoLoginResponse | null)
    loading, // 로딩 상태
    error, // 에러 메시지
    handleKakaoLogin, // 로그인 함수
    handleLogout, // 로그아웃 함수
  };
};
