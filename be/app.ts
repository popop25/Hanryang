import express, { ErrorRequestHandler } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import cors from "cors";

import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import locationRouter from "./routes/location";
import passportConfig from "./passport/passportConfig";

dotenv.config();
const app = express();
passportConfig();

app.set("port", process.env.PORT || 8001);

app.use(morgan("dev"));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/locations", locationRouter);

app.use((req, res, next) => {
  res
    .status(404)
    .json({ message: `${req.method} ${req.url} 라우터가 없습니다.` });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV !== "production" ? err : {},
  });
};
app.use(errorHandler);

export default app;
