import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import connectDB from "./db/db";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/messageRoutes";
import userRoutes from "./routes/userRoutes";
import cors from "cors";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
    }
));


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on ${PORT}`);
})