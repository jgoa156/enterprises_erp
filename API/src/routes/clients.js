import express from "express";
import clientsController from "../controllers/clients";
import auth from "../auth";
const router = express.Router();

// GET
router.get("/", auth.verifyAuth, auth.verifyPermission, clientsController.list);
router.get("/:id", auth.verifyAuth, auth.verifyPermission, clientsController.list);

router.get("/:id/projects/", auth.verifyAuth, auth.verifyPermission, clientsController.listProjects);
router.get("/:id/projects/:projectId", auth.verifyAuth, auth.verifyPermission, clientsController.listProjects);

// POST
router.post("/", auth.verifyAuth, auth.verifyPermission, clientsController.add);
router.post("/:id/projects/", auth.verifyAuth, auth.verifyPermission, clientsController.addProject);

// PUT
router.put("/:id", auth.verifyAuth, auth.verifyPermission, clientsController.update);
router.put("/:id/projects/:projectId", auth.verifyAuth, auth.verifyPermission, clientsController.updateProject);

// DELETE
router.delete("/:id", auth.verifyAuth, auth.verifyPermission, clientsController.remove);
router.delete("/:id/projects/:projectId", auth.verifyAuth, auth.verifyPermission, clientsController.removeProject);

export default router;