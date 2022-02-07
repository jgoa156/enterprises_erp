import express from "express";
import permissionsController from "../controllers/permissions";
import auth from "../auth";
const router = express.Router();

// GET
router.get("/", auth.verifyAuth, permissionsController.list);
router.get("/:id", auth.verifyAuth, permissionsController.list);

export default router;