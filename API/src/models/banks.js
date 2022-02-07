"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Banks extends Model {
		static associate(models) {
			this.hasMany(models.Employees, { foreignKey: "bank_id", sourceKey: "id", as: "employees" });
		}
	}
	Banks.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			code: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isNumeric: true,
				},
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
		},
		{
			sequelize,
			modelName: "Banks",
		}
	);
	return Banks;
};
