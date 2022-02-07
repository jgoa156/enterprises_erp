import { isCnpj } from "../utils";

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Clients extends Model {
		static associate(models) {
			this.hasMany(models.Projects, { foreignKey: "client_id", sourceKey: "id", as: "projects" });
		}
	}
	Clients.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			cnpj: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isNumeric: true,
					len: [14, 14],
					isValid(value) {
						if (!isCnpj(value)) {
							throw new Error("invalid cnpj value");
						}
					}
				}
			}
		},
		{
			sequelize,
			modelName: "Clients",
		}
	);
	return Clients;
};
