import { Router } from 'express';
import { quzzesController } from '../controllers/quizzes.controller';

export const quizzesRouter = Router();

quizzesRouter.get('/', quzzesController.getAll);
quizzesRouter.post('/', quzzesController.postOne);
quizzesRouter.get('/:id', quzzesController.getOne);
quizzesRouter.delete('/:id', quzzesController.deleteOne);
