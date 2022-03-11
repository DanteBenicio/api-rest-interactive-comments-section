"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Comments_1 = require("../models/Comments");
const CurrentUser_1 = require("../models/CurrentUser");
const router = (0, express_1.default)();
router.get('/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield Comments_1.Comments.find();
        const commentsData = comments.map(comment => {
            const commentContent = {
                id: comment.id,
                content: comment.content,
                createdAt: comment.createdAt,
                score: comment.score,
                user: comment.user,
                replies: comment.replies.map((reply) => {
                    return {
                        id: reply.id,
                        content: reply.content,
                        createdAt: reply.createdAt,
                        replyingTo: reply.replyingTo,
                        score: reply.score,
                        user: reply.user,
                        you: reply.you
                    };
                }),
            };
            return commentContent;
        });
        return res.status(200).json(commentsData);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}));
router.get('/currentUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [currentUserData] = yield CurrentUser_1.CurrentUser.find();
        return res.status(200).json(currentUserData);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}));
router.post('/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        res.status(422).json({
            error: 'Insira os dados para serem processados!'
        });
        return;
    }
    try {
        yield Comments_1.Comments.insertMany(req.body);
        res.status(201).json({
            message: 'Comentário inserido sucesso!'
        });
    }
    catch (error) {
        res.status(500).json({
            error
        });
    }
}));
router.put('/comments/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!req.body) {
        res.status(422).json({
            error: 'Insira os dados para serem enviados'
        });
        return;
    }
    try {
        yield Comments_1.Comments.updateOne({ id: id }, req.body);
        res.status(200).json(req.body);
    }
    catch (error) {
        res.status(500).json({
            error
        });
    }
}));
router.delete('/comments/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield Comments_1.Comments.deleteOne({ id: id });
        if (response.deletedCount === 0) {
            res.status(422).json({
                message: 'Comentário não encontrado!'
            });
            return;
        }
        res.status(200).json({
            message: 'Deletado com sucesso!'
        });
    }
    catch (error) {
        res.status(500).json({
            error
        });
    }
}));
module.exports = router;