import express, { Request, Response } from "express";
import Conversation from "../models/conversationModel";
import Message from "../models/messageModel";

interface RequestWithUser extends Request {
    user?: {
        _id: string;
    }
}

export const sendMessage = async (req: RequestWithUser, res: Response) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user?._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId],
            }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation?.messages.push(newMessage._id);
        }

        await Promise.all([conversation?.save(), newMessage.save()]);

        res.status(200).json(newMessage);

    } catch (error) {
        console.log("Error while sending message", error);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }

}

export const getMessages = async (req: RequestWithUser, res: Response) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user?._id;

        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, userToChatId],
            }
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation?.messages;
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error while sending message", error);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}
