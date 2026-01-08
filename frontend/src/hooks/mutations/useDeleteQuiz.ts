import { queryClient } from "@/main";
import { deleteQuiz } from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteQuiz = () =>
  useMutation({
    mutationFn: async (id: string) => deleteQuiz(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes", "all"] });
    },
    onError: (error) => console.log(error.message),
  });
