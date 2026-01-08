import { useState } from "react";
import { VStack } from "@chakra-ui/react";
import { NoDataAvalable, SectionHeader } from "@/components";
import { useDeleteQuiz, useGetAllQuizzes } from "@/hooks";
import texts from "@root/texts.json";
import { DeleteQuizModal, QuizCardList } from "./components";

export const QuizListPage = () => {
  const { data, error } = useGetAllQuizzes();
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const { mutate: deleteQuizMutate } = useDeleteQuiz();
  const cancelDeleting = () => setSelectedQuiz(null);
  const handleDeleteQuiz = (id: string) => {
    deleteQuizMutate(id);
    setSelectedQuiz(null);
  };

  return (
    <VStack align="start" gap={6}>
      <SectionHeader title={texts.quizlist.title} />
      {data && !error ? (
        <QuizCardList setSelectedQuiz={setSelectedQuiz} list={data} />
      ) : (
        <NoDataAvalable />
      )}
      {selectedQuiz && (
        <DeleteQuizModal
          selectedQuiz={selectedQuiz}
          cancelDeleting={cancelDeleting}
          deleteQuiz={handleDeleteQuiz}
        />
      )}
    </VStack>
  );
};
