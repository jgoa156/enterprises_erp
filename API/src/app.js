import express from "express";
/*import session from "express-session";
import { v4 as uuid } from "uuid";*/
import routes from "./routes";
import cors from "cors";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static("public"));
/*app.use(
	session({
		genid: () => uuid(),
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { expires: 60 * 60 * 1000 },
	})
);*/
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const PORT = process.env.NODE_LOCAL_PORT;

app.use(routes);
app.listen(PORT, () => {
	console.log(
		`Server running at ${PORT}`
	);
});
