
import type { QuizInput, QuizzType } from "@/types";
import { API,API_ROUTES } from "@/api";

export const getAllQuizzes = async () =>
  (await API.get(API_ROUTES.GET_ALL())).data;

export const getQuizById = async (id: string) =>
  (await API.get(API_ROUTES.GET(id))).data;

export const postQuiz = async (body: QuizInput): Promise<QuizzType> =>
  (await API.post(API_ROUTES.POST(), body)).data;

export const deleteQuiz = async (id: string) =>
  (await API.delete(API_ROUTES.DELETE(id))).data;
