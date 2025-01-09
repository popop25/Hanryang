import Sequelize, {
  Model,
  InferAttributes,
  InferCreationAttributes,
  ModelStatic,
} from "sequelize";

class Bookmark extends Model<
  InferAttributes<Bookmark>,
  InferCreationAttributes<Bookmark>
> {
  declare id: number;
  declare user_id: number;
  declare location_id: number;

  static initiate(sequelize: Sequelize.Sequelize) {
    Bookmark.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        location_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Bookmark",
        tableName: "bookmarks",
        timestamps: false,
        underscored: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(models: Record<string, ModelStatic<Model>>) {
    Bookmark.belongsTo(models.User, { foreignKey: "user_id" });
    Bookmark.belongsTo(models.Location, { foreignKey: "location_id" });
  }
}

export default Bookmark;
