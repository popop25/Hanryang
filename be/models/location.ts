import Sequelize, {
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

class Location extends Model<
  InferAttributes<Location>,
  InferCreationAttributes<Location>
> {
  declare id: number;
  declare name: string;
  declare description: string;
  declare latitude: number;
  declare longitude: number;
  declare category: string;
  declare imageUrl: string | null;

  static initiate(sequelize: Sequelize.Sequelize) {
    Location.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        category: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        imageUrl: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Location",
        tableName: "locations",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(models: any) {
    // Bookmark와 관계 설정
    Location.hasMany(models.Bookmark, {
      foreignKey: "location_id",
      sourceKey: "id",
    });
  }
}

export default Location;
