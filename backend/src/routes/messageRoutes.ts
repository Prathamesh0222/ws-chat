import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController";
import protectRoute from "../middleware/protectRoute";

const messageRoutes = express.Router();


messageRoutes.post("/send/:id", protectRoute, sendMessage);
messageRoutes.get("/:id", protectRoute, getMessages);

export default messageRoutes;