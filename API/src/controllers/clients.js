import { handleError } from "../utils";
import { Clients, Projects } from "../models";

async function list(req, res) {
	try {
		const { id } = req.params;

		if (id) {
			let options = { where: { id: id } };

			const { projects } = req.query;
			if (projects && projects == "true") {
				options = {...options, include: { association: "projects" }};
			}

			const client = await Clients.findOne(options);

			if (client) {
				res.send(client);
			}

			res.status(404).json({ message: "Client not found" });
		} else {
			let options = {};

			const { limit, offset, projects } = req.query;

			if (limit && parseInt(limit) !== NaN) {
				if (offset && parseInt(offset) !== NaN) {
					options = {...options, limit: [parseInt(offset), parseInt(limit)]};
				}
				options = {...options, limit: parseInt(limit)};
			}
			if (offset && parseInt(offset) !== NaN) {
				options = {...options, offset: parseInt(offset)}
			}
			if (projects && projects == "true") {
				options = {...options, include: { association: "projects" }};
			}

			res.send(await Clients.findAll(options));
		}
	} catch (error) {
		handleError(res, error);
	}
}

async function listProjects(req, res) {
	try {
		const { id } = req.params;
		const client = await Clients.findByPk(id);

		if (client) {
			const { projectId } = req.params;

			if (projectId) {
				const project = await Projects.findOne({
					where: { client_id: id, id: projectId },
				});

				if (project) {
					res.send(project);
				}

				res.status(404).json({ message: "Project not found" });
			} else {
				let options = { where: { client_id: id } };

				const { limit, offset } = req.query;

				if (limit && parseInt(limit) !== NaN) {
					if (offset) {
						options = {...options, limit: [parseInt(offset), parseInt(limit)]};
					}
					options = {...options, limit: parseInt(limit)};
				}
				if (offset && parseInt(offset) !== NaN) {
					options = {...options, offset: parseInt(offset)};
				}

				res.send(await Projects.findAll(options));
			}
		}

		res.status(404).json({ message: "Client not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function add(req, res) {
	try {
		const client = await Clients.create({ ...req.body });
		const response = {
			message: "Client added successfully",
			client: client,
		};

		res.status(200).json(response);
	} catch (error) {
		handleError(res, error);
	}
}

async function addProject(req, res) {
	try {
		const { id } = req.params;
		const client = await Clients.findByPk(id);

		if (client) {
			const project = await Projects.create({ client_id: id, ...req.body });
			const response = {
				message: "Project added successfully",
				project: project
			};

			res.status(200).json(response);
		}

		res.status(404).json({ message: "Client not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function update(req, res) {
	try {
		const { id } = req.params;
		const client = await Clients.findByPk(id);

		if (client) {
			var body = req.body;
			delete body.id;

			await client.update({ ...body }).then(() => {
				const response = {
					message: "Client updated successfully",
					client: client,
				};

				res.status(200).json(response);
			});
		}

		res.status(404).json({ message: "Client not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function updateProject(req, res) {
	try {
		const { id } = req.params;
		const client = await Clients.findByPk(id);

		if (client) {
			const { projectId } = req.params;
			const project = await Projects.findOne({
				where: { client_id: id, id: projectId },
			});

			if (project) {
				var body = req.body;
				delete body.id;

				await project.update({ ...body }).then(() => {
					const response = {
						message: "Client updated successfully",
						project: project,
					};

					res.status(200).json(response);
				});
			}

			res.status(404).json({ message: "Project not found" });
		}

		res.status(404).json({ message: "Client not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function remove(req, res) {
	const { id } = req.params;

	try {
		const client = await Clients.findByPk(id);

		if (client) {
			await client.destroy().then(() => {
				res.status(200).json({
					message: "Client removed successfully",
				});
			});
		}

		res.status(404).json({ message: "Client not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function removeProject(req, res) {
	const { id } = req.params;

	try {
		const client = await Clients.findByPk(id);

		if (client) {
			const { projectId } = req.params;
			const project = await Projects.findOne({
				where: { client_id: id, id: projectId },
			});

			if (project) {
				await client.destroy().then(() => {
					res.status(200).json({
						message: "Project removed successfully",
					});
				});
			}

			res.status(404).json({ message: "Project not found" });
		}

		res.status(404).json({ message: "Client not found" });
	} catch (error) {
		handleError(res, error);
	}
}

export default {
	list,
	listProjects,
	add,
	addProject,
	update,
	updateProject,
	remove,
	removeProject,
};
