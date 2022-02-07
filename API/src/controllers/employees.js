import bcrypt from "bcryptjs";
import { handleError } from "../utils";
import { Employees, Projects, Banks, Roles, Permissions } from "../models";

async function list(req, res) {
	try {
		const { login } = req.params;

		if (login) {
			let options = {
				where: { login: login },
				attributes: {
					exclude: [
						"password",
						"bank_id",
						"role_id",
						"permission_id",
					],
				},
				include: [
					{
						model: Banks,
						as: "bank",
						attributes: { exclude: ["createdAt", "updatedAt"] },
					},
					{
						model: Roles,
						as: "role",
						attributes: ["id", "name"],
					},
					{
						model: Permissions,
						as: "permission",
						attributes: ["id", "name"],
					},
				],
			};

			const { projects } = req.query;
			if (projects && projects == "true") {
				options = {
					...options,
					include: [
						...options.include,
						{
							association: "projects",
							attributes: ["id", "name", "description"],
							through: {
								attributes: [],
							},
						},
					],
				};
			}

			const employee = await Employees.findOne(options);

			if (employee) {
				res.send(employee);
			}

			res.status(404).json({ message: "Employee not found" });
		} else {
			let options = {
				attributes: {
					exclude: [
						"password",
						"bank_id",
						"role_id",
						"permission_id",
					],
				},
				include: [
					{
						model: Banks,
						as: "bank",
						attributes: { exclude: ["createdAt", "updatedAt"] },
					},
					{
						model: Roles,
						as: "role",
						attributes: ["id", "name"],
					},
					{
						model: Permissions,
						as: "permission",
						attributes: ["id", "name"],
					},
				],
			};

			const { limit, offset, projects } = req.query;

			if (limit && parseInt(limit) !== NaN) {
				if (offset && parseInt(offset) !== NaN) {
					options = {
						...options,
						limit: [parseInt(offset), parseInt(limit)],
					};
				}
				options = { ...options, limit: parseInt(limit) };
			}
			if (offset && parseInt(offset) !== NaN) {
				options = { ...options, offset: parseInt(offset) };
			}
			if (projects && projects == "true") {
				options = {
					...options,
					include: [
						...options.include,
						{
							association: "projects",
							attributes: ["id", "name", "description"],
							through: {
								attributes: [],
							},
						},
					],
				};
			}

			res.send(await Employees.findAll(options));
		}
	} catch (error) {
		handleError(res, error);
	}
}

async function add(req, res) {
	try {
		const { bank_id, role_id, permission_id } = req.body;

		if (!(await Banks.findByPk(bank_id))) {
			res.status(400).json({ message: "Bank doesn't exist" });
		}
		if (!(await Roles.findByPk(role_id))) {
			res.status(400).json({ message: "Role doesn't exist" });
		}
		if (!(await Permissions.findByPk(permission_id))) {
			res.status(400).json({ message: "Permission doesn't exist" });
		}

		const password = await bcrypt.hash(
			req.body.password,
			await bcrypt.genSalt(parseInt(process.env.BCRYPT_ROUNDS))
		);

		const employee = await Employees.create({
			...req.body,
			password: password,
		});

		const response = {
			message: "Employee added successfully",
			employee: employee,
		};

		res.status(200).json(response);
	} catch (error) {
		handleError(res, error);
	}
}

async function assignToProject(req, res) {
	try {
		const { login } = req.params;
		const employee = await Employees.findByPk(login);

		if (employee) {
			const { projectId } = req.params;
			const project = await Projects.findByPk(projectId);

			if (project) {
				await employee.addProject(project);
				const response = {
					message: "Employee assigned to project successfully",
				};

				res.status(200).json(response);
			}

			res.status(404).json({ message: "Project not found" });
		}

		res.status(404).json({ message: "Employee not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function update(req, res) {
	try {
		const { login } = req.params;
		const employee = await Employees.findByPk(login);

		if (employee) {
			var body = req.body;
			delete body.login;

			const { bank_id, role_id, permission_id } = body;

			if (bank_id && !(await Banks.findByPk(bank_id))) {
				res.status(400).json({ message: "Bank doesn't exist" });
			}
			if (role_id && !(await Roles.findByPk(role_id))) {
				res.status(400).json({ message: "Role doesn't exist" });
			}
			if (permission_id && !(await Permissions.findByPk(permission_id))) {
				res.status(400).json({ message: "Permission doesn't exist" });
			}

			await employee.update({ ...body }).then(() => {
				const response = {
					message: "Employee updated successfully",
					employee: employee,
				};

				res.status(200).json(response);
			});
		}

		res.status(404).json({ message: "Employee not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function remove(req, res) {
	const { login } = req.params;

	try {
		const employee = await Employees.findByPk(login);

		if (employee) {
			await employee.destroy().then(() => {
				res.status(200).json({
					message: "Employee removed successfully",
				});
			});
		}

		res.status(404).json({ message: "Employee not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function removeFromProject(req, res) {
	try {
		const { login } = req.params;
		const employee = await Employees.findByPk(login);

		if (employee) {
			const { projectId } = req.params;
			const project = await Projects.findByPk(projectId);

			if (project) {
				await employee.removeProject(project);
				const response = {
					message: "Employee removed from project successfully",
				};

				res.status(200).json(response);
			}

			res.status(404).json({ message: "Project not found" });
		}

		res.status(404).json({ message: "Employee not found" });
	} catch (error) {
		handleError(res, error);
	}
}

export default {
	list,
	add,
	assignToProject,
	update,
	remove,
	removeFromProject,
};
