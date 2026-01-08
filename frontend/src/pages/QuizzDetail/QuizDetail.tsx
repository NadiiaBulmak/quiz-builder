import { Box, Heading, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import texts from "@root/texts.json";
import { useGetQuiz } from "@/hooks";
import { AppLoader, SectionHeader } from "@/components";
import { QuestionList } from "./components";

export const QuizDetailPage = () => {
  const { id } = useParams();
  const { data: quiz, error, isLoading } = useGetQuiz(id!);

  if (error) {
    return <>Error occured</>;
  }

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <VStack align="start" gap={6}>
      <SectionHeader title={texts.quizdetails.title} />
      <Box w="full">
        <Heading mb={6}>{quiz.title}</Heading>
        <QuestionList questions={quiz.questions} />
      </Box>
    </VStack>
  );
};
