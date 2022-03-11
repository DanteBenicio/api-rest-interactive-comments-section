import express from 'express';
import { connectMongodb } from './services/mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// configurando para pegar as variaveis de ambiente
dotenv.config()

// inicializando o express
const app = express();

// conectar com o mongodb
connectMongodb(process.env.MONGO_DB_URL!);

// middlewares (funçoes que são executadas entre a requisição e resposta)
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors())

app.use('/', require('./routes'))

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running')
})
