"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Employees", {
			login: {
				type: Sequelize.STRING,
				allowNull: false,
				primaryKey: true
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			identification: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			birth: {
				type: Sequelize.DATEONLY,
				allowNull: false
			},
			addr_postal: {
				type: Sequelize.STRING,
				allowNull: false
			},
			addr_city: {
				type: Sequelize.STRING,
			},
			addr_state: {
				type: Sequelize.STRING,
			},
			addr_street: {
				type: Sequelize.STRING,
			},
			addr_complement: {
				type: Sequelize.STRING,
			},
			addr_number: {
				type: Sequelize.STRING,
			},
			bank_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Banks", key: "id" },
				onUpdate: "CASCADE"
			},
			bank_agency: {
				type: Sequelize.STRING,
				allowNull: false
			},
			bank_acc: {
				type: Sequelize.STRING,
				allowNull: false
			},
			role_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Roles", key: "id" },
				onUpdate: "CASCADE"
			},
			permission_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Permissions", key: "id" },
				onUpdate: "CASCADE"
			},
			salary: {
				type: Sequelize.DECIMAL(10,2),
				allowNull: false
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
		await queryInterface.dropTable("Employees");
	},
};
