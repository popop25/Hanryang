import axios from "./axiosInstance"; // Axios 인스턴스 가져오기

/**
 * 카카오 로그인 API 호출
 * @param token - 카카오 액세스 토큰
 * @returns 서버에서 반환된 사용자 정보 또는 인증 토큰
 */
interface KakaoLoginResponse {
  id: string;
  email: string;
  name: string;
  accessToken: string;
}

export const kakaoLogin = async (
  token: string
): Promise<KakaoLoginResponse> => {
  try {
    const response = await axios.post("/auth/kakao-login", { token });
    return response.data; // 서버에서 반환된 데이터
  } catch (error) {
    console.error("카카오 로그인 실패:", error);
    throw error;
  }
};

/**
 * 로그아웃 API 호출
 * @returns 로그아웃 결과
 */
export const logout = async (): Promise<void> => {
  try {
    await axios.post("/auth/logout");
    console.log("로그아웃 성공");
  } catch (error) {
    console.error("로그아웃 실패:", error);
    throw error;
  }
};
