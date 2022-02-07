import express from "express";
const router = express.Router();

import mainRouter from "./main";
import banksRouter from "./banks";
import permissionsRouter from "./permissions";
import rolesRouter from "./roles";
import clientsRouter from "./clients";
import employeesRouter from "./employees";

router.use("/", mainRouter);
router.use("/banks", banksRouter);
router.use("/permissions", permissionsRouter);
router.use("/roles", rolesRouter);
router.use("/clients", clientsRouter);
router.use("/employees", employeesRouter);

export default router;