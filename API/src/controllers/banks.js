import { handleError } from "../utils";
import { Banks } from "../models/";

async function list(req, res) {
	try {
		const { id } = req.params;

		if (id) {
			const bank = await Banks.findByPk(id);

			if (bank) {
				res.send(bank);
			}

			res.status(404).json({ message: "Bank not found" });
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

			res.send(await Banks.findAll(options));
		}
	} catch (error) {
		handleError(res, error);
	}
}

async function add(req, res) {
	try {
		const bank = await Banks.create({ ...req.body })
		const response = {
			message: "Bank added successfully",
			bank: bank
		};

		res.status(200).json(response);
	} catch (error) {
		handleError(res, error);
	}
}

async function update(req, res) {
	try {
		const { id } = req.params;
		const bank = await Banks.findByPk(id);

		if (bank) {
			var body = req.body;
			delete body.id;

			await bank.update({ ...body }).then(() => {
				const response = {
					message: "Bank updated successfully",
					bank: bank
				};
		
				res.status(200).json(response);
			});
		}

		res.status(404).json({ message: "Bank not found" });
	} catch (error) {
		handleError(res, error);
	}
}

async function remove(req, res) {
	try {
		const { id } = req.params;
		const bank = await Banks.findByPk(id);

		if (bank) {
			await bank.destroy().then(() => {
				res.status(200).json({ message: "Bank removed successfully" });
			});
		}

		res.status(404).json({ message: "Bank not found" });
	} catch (error) {
		handleError(res, error);
	}
}

export default { list, add, update, remove };
