"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Projects extends Model {
		static associate(models) {
			this.belongsTo(models.Clients, { foreignKey: "client_id", targetKey: "id", as: "client" });
			
			this.belongsToMany(models.Employees, { foreignKey: "project_id", through: "employeeprojects", as: "employees" });
		}
	}
	Projects.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			client_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "Projects",
		}
	);
	return Projects;
};
