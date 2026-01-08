import express from 'express';
import cors from 'cors';
import { API_ROUTES_BASE } from './constants/appRouterConfig.js';
export const createServer = () => {
    const app = express();
    app.use(cors({
        origin: process.env.CLIENT_URL,
    }));
    app.use(express.json());
    app.use(API_ROUTES_BASE.quizzes);
    return app;
};
