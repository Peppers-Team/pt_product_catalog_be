'use strict';
const {
  Model
} = require('sequelize');
const { flatten } = require("express/lib/utils");
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Detail.init({
    id: {
      type: DataTypes.STRING, allowNull: false,
    },
    namespaceId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING, allowNull: false
    },
    capacityAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    capacity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priceRegular: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priceDiscount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    colorsAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    description: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    screen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resolution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    processor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ram: {
      type: DataTypes.STRING,
      allowNull: false
    },
    camera: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zoom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cell: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }
  }, {
    sequelize, modelName: 'Detail', timestamps: false,
  });
  return Detail;
};