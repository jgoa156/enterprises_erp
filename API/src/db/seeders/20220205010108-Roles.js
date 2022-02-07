"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Roles",
			[
				{
					name: "Hardware Technician",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Help Desk Analyst",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Help Desk Support",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Network Administrator",
					worker_limit: 5,
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Network Engineer",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Business Analyst",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "IT Project Manager",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Systems Engineering Manager",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "IT Director",
					worker_limit: 5,
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "President",
					worker_limit: 1,
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Vice President",
					worker_limit: 1,
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "CIO",
					worker_limit: 1,
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "CTO",
					worker_limit: 1,
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "CEO",
					worker_limit: 1,
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Full Stack Developer",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Front-end Developer",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Back-end Developer",
					description: "Lorem ipsum dolor sit amet",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Roles", null, {});
	},
};
