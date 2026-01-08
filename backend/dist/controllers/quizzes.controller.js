import { quizzesRepository } from '../entity/quizzes.repository';
export const getAll = async (req, res) => {
    try {
        const quizzes = await quizzesRepository.getAll();
        res.sendStatus(200).json(quizzes);
    }
    catch (error) {
        res.sendStatus(500).send({ error: 'Server error' });
    }
};
export const postOne = async (req, res) => {
    try {
        const data = req.body;
        const quiz = await quizzesRepository.create(data);
        res.status(201).json(quiz);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: message });
    }
};
export const getOne = async (req, res) => {
    try {
        const quiz = await quizzesRepository.getById(req.params.id);
        if (!quiz) {
            res.sendStatus(404);
        }
        res.sendStatus(200).json(quiz);
    }
    catch (error) {
        res.sendStatus(500).send({ error: 'Server error' });
    }
};
export const deleteOne = async (req, res) => {
    try {
        const quiz = await quizzesRepository.getById(req.params.id);
        if (!quiz) {
            res.sendStatus(404);
        }
        await quizzesRepository.deleteById(req.params.id);
        res.sendStatus(204);
    }
    catch (error) {
        res.sendStatus(500).send({ error: 'Server error' });
    }
};
export const quzzesController = {
    getAll,
    postOne,
    getOne,
    deleteOne,
};
