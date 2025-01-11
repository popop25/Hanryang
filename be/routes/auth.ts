import express from "express";
import passport from "passport";
import { isLoggedIn } from "../middlewares";

const router = express.Router();

// 로그인 상태 확인
router.get("/status", (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({
      success: true,
      user: req.user, // 로그인된 사용자 정보 반환
    });
  }
  res.status(401).json({ success: false, message: "Not authenticated" });
});

// 카카오 로그인 요청
router.get("/kakao", passport.authenticate("kakao"));

// 카카오 로그인 콜백
router.get(
  "/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL || "/");
  }
);

// 로그아웃
router.get("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {
    res.status(200).json({ success: true, message: "로그아웃 성공" });
  });
});

export default router;
