export const API_ROUTES_BASE = {
    quizzes: '/quizzes',
};
export const API_ROUTES = {
    GET_ALL: () => '/quizzes',
    GET: (id) => `/quizzes/:id`,
    POST: () => '/quizzes',
    DELETE: (id) => `/quizzes/:id`,
};
