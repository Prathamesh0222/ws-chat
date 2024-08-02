import express from "express";
import { sendMessage } from "../controllers/messageController";
import protectRoute from "../middleware/protectRoute";

const messageRoutes = express.Router();


messageRoutes.post("/send/:id", protectRoute, sendMessage);

export default messageRoutes;