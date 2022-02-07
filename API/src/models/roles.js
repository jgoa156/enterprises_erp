"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Roles extends Model {
		static associate(models) {
			this.hasMany(models.Employees, { foreignKey: "role_id", sourceKey: "id", as: "employees" });
		}
	}
	Roles.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			worker_limit: {
				type: DataTypes.INTEGER
			},
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "Roles",
		}
	);
	return Roles;
};
