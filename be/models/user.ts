import Sequelize, {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelStatic,
} from "sequelize";

import Bookmark from "./bookmark";

// 사용자 인터페이스 정의
export interface IUser {
  id: number;
  email: string | null;
  nick: string;
  provider: "local" | "kakao";
  snsId: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

class User
  extends Model<InferAttributes<User>, InferCreationAttributes<User>>
  implements IUser
{
  declare id: CreationOptional<number>;
  declare email: string | null;
  declare nick: string;
  declare password: string | null;
  declare provider: "local" | "kakao";
  declare snsId: string | null;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  // Sequelize 모델 초기화
  static initiate(sequelize: Sequelize.Sequelize) {
    User.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING(40),
          allowNull: true,
          unique: true,
        },
        nick: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        provider: {
          type: Sequelize.ENUM("local", "kakao"),
          allowNull: false,
          defaultValue: "local",
        },
        snsId: {
          type: Sequelize.STRING(30),
          allowNull: true,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  // 관계 정의
  static associate(models: Record<string, ModelStatic<Model>>) {
    User.hasMany(models.Bookmark, { foreignKey: "user_id", sourceKey: "id" });
  }
}

export default User;
