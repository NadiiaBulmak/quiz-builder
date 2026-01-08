import { useQuery } from "@tanstack/react-query";
import { getAllQuizzes } from "@/api";
import { useEffect } from "react";

export const useGetAllQuizzes = () => {
  const data = useQuery({
    queryKey: ["quizzes", "all"],
    queryFn: () => getAllQuizzes(),
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
