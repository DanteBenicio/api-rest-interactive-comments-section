"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CurrentUserSchema = new mongoose_1.default.Schema({
    image: {
        png: String,
        webp: String
    },
    username: String
});
exports.CurrentUser = mongoose_1.default.model('CurrentUser', CurrentUserSchema);
