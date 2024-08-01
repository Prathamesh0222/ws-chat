import express from "express";
import { logout, signin, signup } from "../controllers/authController";

const authRoutes = express.Router();

authRoutes.get("/signup", signup);

authRoutes.get("/signin", signin);

authRoutes.get("/logout", logout);

export default authRoutes;