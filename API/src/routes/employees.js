import express from "express";
import employeesController from "../controllers/employees";
import auth from "../auth";
const router = express.Router();

// GET
router.get("/", auth.verifyAuth, auth.verifyPermission, employeesController.list);
router.get("/:login", auth.verifyAuth, auth.verifyPermission, employeesController.list);

// POST
router.post("/", auth.verifyAuth, auth.verifyPermission, employeesController.add);
router.post("/:login/projects/assign/:projectId", auth.verifyAuth, auth.verifyPermission, employeesController.assignToProject);

// PUT
router.put("/:login", auth.verifyAuth, auth.verifyPermission, employeesController.update);

// DELETE
router.delete("/:login", auth.verifyAuth, auth.verifyPermission, employeesController.remove);
router.delete("/:login/projects/remove/:projectId", auth.verifyAuth, auth.verifyPermission, employeesController.removeFromProject);

export default router;