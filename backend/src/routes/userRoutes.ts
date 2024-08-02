import express from "express";
import protectRoute from "../middleware/protectRoute";
import { getUsersForSidebar } from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.get("/", protectRoute, getUsersForSidebar);

export default userRoutes;