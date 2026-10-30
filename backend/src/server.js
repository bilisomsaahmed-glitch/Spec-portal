import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import api from './routes/api.js';
import { connectDatabase, databaseStatus } from './config/database.js';
import { notFound, handleError } from './controllers/errorController.js';

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));
app.get('/api/health', (_req, res) => res.json({ status: 'ok', database: databaseStatus() }));
app.use('/api/auth', rateLimit({ windowMs: 15 * 60 * 1000, max: 40, standardHeaders: true, legacyHeaders: false }));
app.use('/api', api);
app.use(notFound);
app.use(handleError);

const port = process.env.PORT || 5000;
connectDatabase().then(() => app.listen(port, () => console.log(`Tech Club API listening on ${port}`))).catch(err => {
  console.error('MongoDB connection failed:', err.message);
  process.exit(1);
});
