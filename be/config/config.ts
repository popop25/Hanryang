import { Dialect } from "sequelize";

export default {
  development: {
    username: "root",
    password: "251625",
    database: "playground",
    host: "127.0.0.1",
    dialect: "mysql" as Dialect, // Dialect 타입 지정
  },
  test: {
    username: "root",
    password: "251625",
    database: "playground_test",
    host: "127.0.0.1",
    dialect: "mysql" as Dialect,
  },
  production: {
    username: "root",
    password: "251625",
    database: "playground_prod",
    host: "127.0.0.1",
    dialect: "mysql" as Dialect,
  },
};
