import express from "express";
import banksController from "../controllers/banks";
import auth from "../auth";
const router = express.Router();

// GET
router.get("/", auth.verifyAuth, banksController.list);
router.get("/:id", auth.verifyAuth, banksController.list);

// POST
router.post("/", auth.verifyAuth, auth.verifyPermission, banksController.add);

// PUT
router.put("/:id", auth.verifyAuth, auth.verifyPermission, banksController.update);

// DELETE
router.delete("/:id", auth.verifyAuth, auth.verifyPermission, banksController.remove);

export default router;