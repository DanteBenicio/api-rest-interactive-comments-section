import mongoose from "mongoose";

export async function connectMongodb(mongoUri: string) {
  try {
    await mongoose.connect(mongoUri);    
  } catch (error) {
    console.error(error);
  }
};