"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comments_1 = require("../controllers/comments");
const currentUser_1 = require("../controllers/currentUser");
const router = (0, express_1.default)();
router.get('/comments', comments_1.getComments);
router.get('/currentUser', currentUser_1.getCurrentUser);
router.post('/comments', comments_1.createComment);
router.put('/comments/:id', comments_1.updateComment);
router.delete('/comments/:id', comments_1.deleteComment);
exports.default = router;
