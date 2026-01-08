export const APP_ROUTES = {
  ROOT: "/",
  CREATE_QUIZ: "/create",
  QUIZ_DETAIL: (id: string) => `/quizzes/${id}`,
  ALL_QUIZES: "/quizzes",
};
