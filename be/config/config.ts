import { Dialect } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config(); // .env 파일 로드

export default {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "251625",
    database: process.env.DB_DATABASE || "playground",
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql" as Dialect,
  },
  test: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "251625",
    database: `${process.env.DB_DATABASE}_test` || "playground_test",
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql" as Dialect,
  },
  production: {
    username: process.env.DB_USERNAME || "admin",
    password: process.env.DB_PASSWORD || "1q2w3e4r!",
    database: process.env.DB_DATABASE || "playground_production",
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql" as Dialect,
  },
};
