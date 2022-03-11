"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("./services/mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// configurando para pegar as variaveis de ambiente
dotenv_1.default.config();
// inicializando o express
const app = (0, express_1.default)();
// conectar com o mongodb
(0, mongoose_1.connectMongodb)(process.env.MONGO_DB_URL);
// middlewares (funçoes que são executadas entre a requisição e resposta)
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/', require('./routes'));
app.listen(3001, () => {
    console.log('Server is running');
});
