import { RequestHandler } from "express";
import passport from "passport";
import User from "../models/user";

const login: RequestHandler = (req, res, next) => {
  passport.authenticate(
    "local",
    (
      authError: Error | null,
      user: User | false,
      info: { message: string } | undefined
    ) => {
      if (authError) {
        console.error(authError);
        return res.status(500).json({ message: "Authentication error" });
      }
      if (!user) {
        return res
          .status(401)
          .json({ message: info?.message || "Login failed" });
      }
      req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
          return res.status(500).json({ message: "Login error" });
        }
        res.status(200).json({ message: "Login successful", user });
      });
    }
  )(req, res, next);
};
