import { Response } from "express"
import jwt from "jsonwebtoken"
import { ObjectId } from "mongoose";

const generateToken = (userId: string, res: Response) => {
    const secret = process.env.JWT_SECRET || "";
    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign({ userId }, secret, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "developement"
    })
}

export default generateToken;