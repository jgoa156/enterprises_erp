"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Permissions extends Model {
		static associate(models) {
			this.hasMany(models.Employees, { foreignKey: "permission_id", sourceKey: "id", as: "employees" });
		}
	}
	Permissions.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			}
		},
		{
			sequelize,
			modelName: "Permissions",
		}
	);
	return Permissions;
};
