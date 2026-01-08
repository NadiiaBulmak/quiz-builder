import { SimpleGrid } from "@chakra-ui/react";
import type { QuizListProps } from "@/types";
import { QuizCard } from "../QuizCard";

export const QuizCardList: React.FC<QuizListProps> = ({
  list,
  setSelectedQuiz,
}) => (
  <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={3} w='full'>
    {list.map((item) => (
      <QuizCard key={item.id} {...item} setSelectedQuiz={setSelectedQuiz} />
    ))}
  </SimpleGrid>
);
