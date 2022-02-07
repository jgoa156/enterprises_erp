import { handleError } from "../utils";
import { Roles } from "../models/";

async function list(req, res) {
	try {
		const { id } = req.params;

		if (id) {
			const role = await Roles.findByPk(id);

			if (role) {
				res.send(role);
			}

			res.status(404).json({ message: "Role not found" });
		} else {
			let options = {};

			const { limit, offset } = req.query;

			if (limit && parseInt(limit) !== NaN) {
				if (offset && parseInt(offset) !== NaN) {
					options = {...options, limit: [parseInt(offset), parseInt(limit)]};
				}
				options = {...options, limit: parseInt(limit)};
			}
			if (offset && parseInt(offset) !== NaN) {
				options = {...options, offset: parseInt(offset)};
			}

			res.send(await Roles.findAll(options));
		}
	} catch (error) {
		handleError(res, error);
	}
}

async function add(req, res) {
	try {
		const role = await Roles.create({ ...req.body });
		const response = {
			message: "Role added successfully",
			role: role
		};

		res.status(200).json(response);
	} catch (error) {
		handleError(res, error);
	}
}

async function update(req, res) {
	try {
		const { id } = req.params;
		const role = await Roles.findByPk(id);

		if (role) {
			var body = req.body;
			delete body.id;

			await role.update({ ...body }).then(() => {
				const response = {
					message: "Role updated successfully",
					role: role
				};
		
				res.status(200).json(response);
			});
		}

		res.status(404).json({ message: "Role not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function remove(req, res) {
	try {
		const { id } = req.params;
		const role = await Roles.findByPk(id);

		if (role) {
			await role.destroy().then(() => {
				res.status(200).json({ message: "Role removed successfully" });
			});
		}

		res.status(404).json({ message: "Role not found" });
	} catch (error) {
		handleError(res, error);
	}
}

export default { list, add, update, remove };
