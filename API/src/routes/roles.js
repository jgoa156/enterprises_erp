import express from "express";
import rolesController from "../controllers/roles";
import auth from "../auth";
const router = express.Router();

// GET
router.get("/", auth.verifyAuth, rolesController.list);
router.get("/:id", auth.verifyAuth, rolesController.list);

// POST
router.post("/", auth.verifyAuth, auth.verifyPermission, rolesController.add);

// PUT
router.put("/:id", auth.verifyAuth, auth.verifyPermission, rolesController.update);

// DELETE
router.delete("/:id", auth.verifyAuth, auth.verifyPermission, rolesController.remove);

export default router;