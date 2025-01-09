import bcrypt from "bcrypt";
import passport from "passport";
import User from "../models/user";
import { RequestHandler } from "express";

const join: RequestHandler = async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick,
      password: hash,
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const login: RequestHandler = (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return res.status(500).json({ message: "Authentication error" });
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return res.status(500).json({ message: "Login error" });
      }
      res.status(200).json({ message: "Login successful", user });
    });
  })(req, res, next);
};

const logout: RequestHandler = (req, res) => {
  req.logout(() => {
    res.status(200).json({ message: "Logout successful" });
  });
};
