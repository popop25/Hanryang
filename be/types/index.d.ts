import IUser from "@/models/user";

declare global {
  // 전역 Error 객체 확장
  interface Error {
    status?: number; // 예외 상태 코드
  }

  // Express 확장
  namespace Express {
    interface User extends IUser {} // req.user를 IUser로 확장
  }
}
