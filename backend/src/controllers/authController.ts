import { Request, Response } from "express";
import userModel from "../models/userModel";
import bcrypt from "bcryptjs";
import generateToken from "../utils/token";

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

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new userModel({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            await generateToken(newUser._id.toString(), res);
            await newUser.save();

            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({
                error: "Invalid user data",
            })
        }

    } catch (error) {
        console.log("Error while signup", error);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const signin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({
            username
        });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({
                error: "Invalid username or password"
            })
        }
        await generateToken(user._id.toString(), res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log("Error while signin", error);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const logout = (req: Request, res: Response) => {
    console.log("Logout User");
    res.json({ message: "Logout User" });
}

