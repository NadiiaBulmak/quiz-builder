import { postQuiz } from "@/api";
import type { QuizInput, QuizzType } from "@/types";
import { queryClient } from "@/main";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useAddNewQuiz = () => {
  const navigate = useNavigate();
  
  return useMutation<QuizzType, Error, QuizInput>({
    mutationFn: (body: QuizInput) => postQuiz(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes", "all"] });
      navigate(`/quizzes`);
    },
    onError: (error) => console.log(error.message),
  });
};
