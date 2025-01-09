import Sequelize from "sequelize";
import configObj from "../config/config";
import User from "./user";
import Location from "./location";
import Bookmark from "./bookmark";

// 환경 설정 가져오기
const env = (process.env.NODE_ENV as "production" | "test") || "development";
const config = configObj[env];

// Sequelize 인스턴스 생성
export const sequelize = new Sequelize.Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 모델 초기화
User.initiate(sequelize);
Location.initiate(sequelize);
Bookmark.initiate(sequelize);

// 모델 객체 생성
const models = { User, Location, Bookmark };

// 관계 설정
User.associate(models);
Location.associate(models);
Bookmark.associate(models);

export default {
  sequelize,
  ...models,
};
