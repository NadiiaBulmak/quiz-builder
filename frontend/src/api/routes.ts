export const API_ROUTES = {
  GET_ALL: () => "/quizzes",
  POST: () => "/quizzes",
  GET: (id: string) => `/quizzes/${id}`,
  DELETE: (id: string) => `/quizzes/${id}`,
};
