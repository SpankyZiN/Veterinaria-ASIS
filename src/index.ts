import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db';
import authRoutes from './routes/auth';
import petsRoutes from './routes/pets';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', petsRoutes);

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
