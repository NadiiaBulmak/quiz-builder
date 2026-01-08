import { useQuery } from "@tanstack/react-query";
import { getQuizById } from "@/api";
import { useEffect } from "react";

export const useGetQuiz = (id: string) => {
  const data = useQuery({
    queryKey: ["quizzes", "byId", id],
    queryFn: () => getQuizById(id),
    retry: 1,
    retryDelay: 3000,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (data.error) {
      console.log(data.error);
    }
  }, [data.error]);

  return data;
};
