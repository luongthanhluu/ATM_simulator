import { Router } from "express";
import withdraw from "./withdraw";

// Export the base-router
const baseRouter = Router();
baseRouter.use("/withdraw", withdraw);
export default baseRouter;
