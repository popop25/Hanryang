import { create } from "zustand";
import { logout } from "../api/authApi"; // 수정된 API 함수
import axiosInstance from "@/api/axiosInstance";

interface KakaoLoginResponse {
  id: string;
  email: string;
  nick: string;
  accessToken: string;
}

interface AuthState {
  user: KakaoLoginResponse | null; // 사용자 정보 상태
  loading: boolean; // 로딩 상태
  error: string | null; // 에러 메시지 상태
  checkLoginStatus: () => Promise<void>; // 로그인 상태 확인 함수
  logout: () => Promise<void>; // 로그아웃 함수
  setUser: (user: KakaoLoginResponse | null) => void; // 사용자 상태 직접 설정
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  checkLoginStatus: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get("/auth/status", {
        withCredentials: true,
      });
      if (response.data.success) {
        set({ user: response.data.user });
      }
    } catch (error) {
      console.error("로그인 상태 확인 실패:", error);
      set({ user: null, error: "로그인 상태를 확인할 수 없습니다." });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await logout();
      set({ user: null });
      window.location.href = "/"; // 로그아웃 후 홈으로 이동
    } catch (err) {
      console.error("로그아웃 실패:", err);
      set({ error: "로그아웃 실패" });
    } finally {
      set({ loading: false });
    }
  },

  setUser: (user: KakaoLoginResponse | null) => {
    set({ user });
  },
}));

export default useAuthStore;
