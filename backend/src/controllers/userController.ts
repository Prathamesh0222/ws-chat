import { Request, Response } from "express";
import userModel from "../models/userModel";

interface RequestWithUser extends Request {
    user?: {
        _id: string;
    }
}

export const getUsersForSidebar = async (req: RequestWithUser, res: Response) => {
    try {
        const loggedinUser = req.user?._id;
        const filteredUsers = await userModel.find({
            _id: {
                $ne: loggedinUser
            }
        }).select("-password");

        res.status(200).json({
            filteredUsers
        })

    } catch (error) {
        console.log("Error while getting users for sidebar", error);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}