"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("EmployeeProjects", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			employee_login: {
				type: Sequelize.STRING,
				allowNull: false,
				references: { model: "Employees", key: "login" },
				onUpdate: "CASCADE"
			},
			project_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Projects", key: "id" },
				onUpdate: "CASCADE"
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("NOW")
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("NOW")
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("EmployeeProjects");
	},
};
