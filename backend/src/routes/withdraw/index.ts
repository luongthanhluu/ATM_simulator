import { Router } from "express";
import { withdraw } from "./withdraw.controller";
import { body } from "express-validator";

// User-route
const router = Router();
router.post("/", body("withdrawNumber").isNumeric(), withdraw);

export default router;
