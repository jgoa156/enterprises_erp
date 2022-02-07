import express from "express";
import mainController from "../controllers/main";
const router = express.Router();

router.post("/login", mainController.login);

export default router;
