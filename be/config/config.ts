import dotenv from "dotenv";

dotenv.config();

export default {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "251625",
    database: process.env.DB_NAME || "playground",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql" as const,
  },
};
