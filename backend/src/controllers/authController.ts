import { Request, Response } from "express";
import userModel from "../models/userModel";

export const signup = async (req: Request, res: Response) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password does not match" });
        }

        const user = await userModel.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }



    } catch (error) {

    }
}

export const signin = (req: Request, res: Response) => {
    console.log("Signin User");
    res.json({ message: "Signin User" });
}

export const logout = (req: Request, res: Response) => {
    console.log("Logout User");
    res.json({ message: "Logout User" });
}

