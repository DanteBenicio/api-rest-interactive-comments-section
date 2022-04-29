import express from 'express';
import { connectMongodb } from './services/mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import appRoutes from './routes'

dotenv.config()

const app = express();

connectMongodb(process.env.MONGO_DB_URL!);

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', appRoutes)

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running')
})
