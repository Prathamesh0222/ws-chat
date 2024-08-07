import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Response } from "express";
import userModel from "../models/userModel";

const protectRoute = async (req: any, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({
                error: "Unauthorized: No Token provided"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as JwtPayload;

        if (!decoded) {
            return res.status(401).json({
                error: "Unauthorized: Invalid Token"
            })
        }
        const user = await userModel.findById(decoded.userId).select("-password");

        if (!user) {
            res.status(401).json({
                error: "Unauthorized: User not found"
            })
        }
        req.user = user;
        next();

    } catch (error) {
        console.log("Error while protecting route", error);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export default protectRoute;