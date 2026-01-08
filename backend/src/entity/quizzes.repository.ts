import { prisma } from '../db';
import { QuizInput, QuizWithCount, QuizzType } from '../types';

export const getAll = async (): Promise<QuizzType[]> => {
  const quizzes: QuizWithCount[] = await prisma.quiz.findMany({
    select: {
      id: true,
      title: true,
      createdAt: true,
      _count: {
        select: { questions: true },
      },
    },
  });

  return quizzes.map((q: QuizWithCount) => ({
    id: q.id,
    title: q.title,
    createdAt: q.createdAt,
    questionsCount: q._count.questions,
  }));
};

export const getById = async (id: string) => {
  return await prisma.quiz.findUnique({
    where: { id },
    include: {
      questions: {
        include: {
          options: true,
        },
      },
    },
  });
};

export const deleteById = async (id: string) => await prisma.quiz.delete({ where: { id } });

export const create = async (data: QuizInput) =>
  await prisma.quiz.create({
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

export const quizzesRepository = {
  getAll,
  getById,
  deleteById,
  create,
};
