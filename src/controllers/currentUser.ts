import { Request, Response } from "express";
import { CurrentUser } from "../models/CurrentUser";

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const [currentUserData] = await CurrentUser.find()
  
    return res.status(200).json(currentUserData);
  } catch (error) {
    res.status(500).json({error});
  }
}