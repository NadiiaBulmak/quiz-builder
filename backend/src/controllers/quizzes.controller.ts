import { Request, Response } from 'express';
import { QuestionInput } from '../types';
import { quizzesRepository } from '../entity';

export const getAll = async (req: Request, res: Response) => {
  try {
    const quizzes = await quizzesRepository.getAll();
    return res.status(200).json(quizzes);
  } catch (error) {
    return res.status(500).send({ error: 'Server error' });
  }
};

export const postOne = async (req: Request, res: Response) => {
  try {
    const { title, questions } = req.body;
    const isOptionsMissed = questions.some((q: QuestionInput) => (!q.options || !q.text) && q.type !== 'INPUT');

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    if (isOptionsMissed) {
      return res.status(400).json({ error: 'Question options are required' });
    }

    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: 'At least one question is required' });
    }

    const quiz = await quizzesRepository.create({ title, questions });
    return res.status(201).json(quiz);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const quiz = await quizzesRepository.getById(req.params.id);

    if (!quiz) {
      return res.sendStatus(404);
    }

    return res.status(200).json(quiz);
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const quiz = await quizzesRepository.getById(req.params.id);
    console.log(req.params.id);
    if (!quiz) {
      return res.sendStatus(404);
    }
    await quizzesRepository.deleteById(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
};

export const quzzesController = {
  getAll,
  postOne,
  getOne,
  deleteOne,
};
