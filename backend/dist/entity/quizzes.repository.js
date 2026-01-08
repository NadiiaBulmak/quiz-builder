import { prisma } from '../db';
export const getAll = async () => {
    const quizzes = await prisma.quiz.findMany({
        select: {
            id: true,
            title: true,
            createdAt: true,
            _count: {
                select: { questions: true },
            },
        },
    });
    return quizzes.map((q) => ({
        id: q.id,
        title: q.title,
        createdAt: q.createdAt,
        questionsCount: q._count.questions,
    }));
};
export const getById = (id) => {
    return prisma.quiz.findUnique({ where: { id } });
};
export const deleteById = (id) => {
    return prisma.quiz.delete({ where: { id } });
};
export const create = async (data) => {
    const quiz = await prisma.quiz.create({
        data: {
            title: data.title,
            questions: {
                create: data.questions.map(q => ({
                    text: q.text,
                    type: q.type,
                    options: q.options ? { create: q.options } : undefined,
                })),
            },
        },
        include: {
            questions: { include: { options: true } },
        },
    });
    return quiz;
};
export const quizzesRepository = {
    getAll,
    getById,
    deleteById,
    create,
};
