import bcrypt from "bcryptjs";
import { handleError } from "../utils";
import { Employees, Banks, Roles, Permissions } from "../models";
import jwt from "jsonwebtoken";
require("dotenv").config();

async function login(req, res) {
	try {
		const { login, password } = req.body;

		if (!login || !password) {
			res.status(400).send({ message: "Missing params" });
		}

		const user = await Employees.findOne({
			where: { login: login },
			attributes: {
				exclude: ["bank_id", "role_id", "permission_id"],
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
		});

		if (user) {
			if (await bcrypt.compare(password, user.password)) {
				/*req.session.user = user.login;
				req.session.permission = user.permission;*/

				const token = jwt.sign(
					{ user: user.login, permission: user.permission },
					process.env.SECRET,
					{
						expiresIn: "1h",
					}
				);
				const response = {
					message:
						"User authenticated successfully; credentials valid for 1 hour",
					token: token,
					user: user,
				};

				res.send(response);
			}
			res.status(401).send({ message: "Password doesn't match" });
		}

		res.status(404).send({ message: "User not found" });
	} catch (error) {
		handleError(res, error);
	}
}

export default { login };
