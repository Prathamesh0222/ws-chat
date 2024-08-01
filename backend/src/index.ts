import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import connectDB from "./db/db";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on ${PORT}`);
});