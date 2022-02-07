"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Permissions",
			[
				{
					name: "Administrator",
				},
				{
					name: "User",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Permissions", null, {});
	},
};
