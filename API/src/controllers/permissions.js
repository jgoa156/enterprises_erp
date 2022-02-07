import { handleError } from "../utils";
import { Permissions } from "../models/";

async function list (req, res) {
	try {
		const { id } = req.params;

		if (id) {
			const permission = await Permissions.findByPk(id);

			if (permission) {
				res.send(permission);
			}

			res.status(404).json({ message: "Permission not found" });
		} else {
			let options = {};

			const { limit, offset } = req.query;

			if (limit && parseInt(limit) !== NaN) {
				if (offset && parseInt(limit) !== NaN) {
					options = {...options, limit: [parseInt(offset), parseInt(limit)]};
				}
				options = {...options, limit: parseInt(limit)};
			}
			if (offset && parseInt(offset) !== NaN) {
				options = {...options, offset: parseInt(offset)};
			}

			res.send(await Permissions.findAll(options));
		}
	} catch (error) {
		handleError(res, error);
	}
}

export default { list };
