import jwt from "jsonwebtoken";
require("dotenv").config();

function verifyAuth(req, res, next) {
	//if (req.session.user) next();
	const token = req.headers["authorization"].replace("Bearer ", "");

	if (!token) {
		res.status(401).send({ message: "User unauthenticated" });
	}

	try {
		req.decodedToken = jwt.verify(token, process.env.SECRET);
		next();
	} catch (error) {
		if (error.name == "TokenExpiredError" || error.name == "JsonWebTokenError") {
			return res.status(401).json({
				error: error
			});
		}

		return res.status(500).json({
			message: "Error authenticating token; please, try again"
		});
	}
}

function verifyPermission(req, res, next) {
	//if (req.session.permission.name == "Administrator") next();
	if (req.decodedToken.permission.name == "Administrator") next();
	else res.status(403).send({ message: "User unauthorized" });
}

export default { verifyAuth, verifyPermission };
