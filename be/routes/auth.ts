import express from "express";
import passport from "passport";
import { isLoggedIn } from "../middlewares";

const router = express.Router();

// 카카오 로그인 요청
router.get("/kakao", passport.authenticate("kakao"));

// 카카오 로그인 콜백
router.get(
  "/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/" }),
  (req, res) => {
    res.status(200).json({ message: "Kakao login successful", user: req.user });
  }
);

// 로그아웃
router.get("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {
    res.status(200).json({ message: "로그아웃 성공" });
  });
});

export default router;
