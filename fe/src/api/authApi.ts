import axios from "./axiosInstance"; // Axios 인스턴스 가져오기

/**
 * 사용자 정보 응답 타입
 */
interface KakaoLoginResponse {
  id: string;
  email: string;
  name: string;
  accessToken: string;
}

/**
 * 카카오 로그인 리다이렉트
 * 로그인 버튼 클릭 시 호출해 카카오 로그인 페이지로 이동합니다.
 */
export const redirectToKakaoLogin = () => {
  window.location.href = `${axios.defaults.baseURL}/auth/kakao`;
};

/**
 * 로그인 상태 확인 및 사용자 정보 조회
 * @returns 서버에서 반환된 사용자 정보
 */
export const getUserInfo = async (): Promise<KakaoLoginResponse> => {
  try {
    const response = await axios.get("/user");
    return response.data;
  } catch (error) {
    console.error("사용자 정보 가져오기 실패:", error);
    throw error;
  }
};

/**
 * 로그아웃 API 호출
 * @returns 로그아웃 결과
 */
export const logout = async (): Promise<void> => {
  try {
    await axios.get("/auth/logout");
    console.log("로그아웃 성공");
  } catch (error) {
    console.error("로그아웃 실패:", error);
    throw error;
  }
};

export default {
  redirectToKakaoLogin,
  getUserInfo,
  logout,
};
