import passport from "passport";
import kakao from "./kakaoStrategy";
import User from "../models/user"; // Sequelize User 모델 사용

export default () => {
  // serializeUser: 사용자 데이터를 세션에 저장
  passport.serializeUser(
    (user: User, done: (err: any, id?: number) => void) => {
      done(null, user.id);
    }
  );

  // deserializeUser: 세션에서 사용자 데이터를 복원
  passport.deserializeUser(
    async (
      id: number,
      done: (err: any, user?: false | User | null) => void
    ) => {
      try {
        const user = await User.findByPk(id);
        if (user) {
          done(null, user); // 유효한 사용자 반환
        } else {
          done(null, false); // 유효하지 않은 사용자
        }
      } catch (err) {
        done(err);
      }
    }
  );

  // 카카오 로그인 전략 초기화
  kakao();
};
