import express from "express";

import { getUsersForSidebar } from "../controllers/userController";
import protectRoute from "../middleware/protectRoute";

const userRoutes = express.Router();

userRoutes.get("/", protectRoute, getUsersForSidebar);

export default userRoutes;