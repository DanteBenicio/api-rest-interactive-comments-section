import mongoose from 'mongoose'

const CurrentUserSchema = new mongoose.Schema({
  image: {
    png: String,
    webp: String
  },
  username: String
});

export const CurrentUser = mongoose.model('CurrentUser', CurrentUserSchema);