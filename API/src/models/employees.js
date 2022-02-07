"use strict";
const { Model } = require("sequelize");
const { isCnpj, isCpf } = require("../utils");
module.exports = (sequelize, DataTypes) => {
	class Employees extends Model {
		static associate(models) {
			this.belongsTo(models.Banks, { foreignKey: "bank_id", targetKey: "id", as: "bank" });
			this.belongsTo(models.Roles, { foreignKey: "role_id", targetKey: "id", as: "role" });
			this.belongsTo(models.Permissions, { foreignKey: "permission_id", targetKey: "id", as: "permission" });

			this.belongsToMany(models.Projects, { foreignKey: "employee_login", through: "employeeprojects", as: "projects" });
		}
	}
	Employees.init(
		{
			login: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			identification: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isNumeric: true,
					len: [11, 14],
					isValid(value) {
						if (value.length == 11 && !isCpf(value)) {
							throw new Error("invalid cpf value");
						} else if (value.length == 14 && !isCnpj(value)) {
							throw new Error("invalid cnpj value");
						}
					}
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true
				}
			},
			birth: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				validate: {
					isDate: true
				}
			},
			addr_postal: {
				type: DataTypes.STRING,
				allowNull: false
			},
			addr_city: DataTypes.STRING,
			addr_state: DataTypes.STRING,
			addr_street: DataTypes.STRING,
			addr_complement: DataTypes.STRING,
			addr_number: DataTypes.STRING,
			bank_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			bank_agency: {
				type: DataTypes.STRING,
				allowNull: false
			},
			bank_acc: {
				type: DataTypes.STRING,
				allowNull: false
			},
			role_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			permission_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			salary: {
				type: DataTypes.DECIMAL(10,2),
				allowNull: false,
				validate: {
					isFloat: true
				}
			}
		},
		{
			sequelize,
			modelName: "Employees",
		}
	);
	return Employees;
};
