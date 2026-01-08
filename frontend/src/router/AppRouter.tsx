import { Suspense } from "react";
import { AppLoader, Layout } from "../components";
import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import { CreateQuizPage, QuizDetailPage, QuizListPage } from "../pages";


export const AppRouter = () => (
  <Suspense fallback={<AppLoader />}>
    <Routes>
      <Route path={APP_ROUTES.ROOT} element={<Layout />}>
        <Route path={APP_ROUTES.CREATE_QUIZ} element={<CreateQuizPage />} />
        <Route path={APP_ROUTES.ALL_QUIZES} element={<QuizListPage />} />
        <Route
          path={APP_ROUTES.QUIZ_DETAIL(":id")}
          element={<QuizDetailPage />}
        />
      </Route>
    </Routes>
  </Suspense>
);
