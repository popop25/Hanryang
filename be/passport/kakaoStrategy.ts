import passport from "passport";
import { Strategy as KakaoStrategy } from "passport-kakao";
import User from "../models/user";

export default () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID!, // 카카오 REST API 키
        callbackURL: "/auth/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: "kakao" },
          });
          if (exUser) {
            return done(null, exUser);
          }
          const newUser = await User.create({
            email: profile._json && profile._json.kakao_account.email,
            nick: profile.displayName,
            snsId: profile.id,
            provider: "kakao",
          });
          return done(null, newUser);
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
