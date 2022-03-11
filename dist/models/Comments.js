"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Replies = new mongoose_1.default.Schema({
    id: Number,
    content: String,
    createdAt: String,
    replyingTo: String,
    score: Number,
    user: {
        image: {
            png: String,
            webp: String
        },
        username: String
    },
    you: Boolean
});
const commentSchema = new mongoose_1.default.Schema({
    id: Number,
    content: String,
    you: Boolean,
    createdAt: String,
    score: Number,
    user: {
        image: {
            png: String,
            webp: String
        },
        username: String
    },
    replies: [Replies]
});
exports.Comments = mongoose_1.default.model('Comment', commentSchema);
