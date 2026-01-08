import { Box, Input, Text, VStack } from "@chakra-ui/react";
import type { Question, QuestionListProps } from "@/types";
import { QuestionOptionList } from "../QuestionOptionList";

export const QuestionList: React.FC<QuestionListProps> = ({ questions }) => (
  <VStack gap={6} align="stretch">
    {questions.map((question: Question, index: number) => (
      <Box key={question.id} p={4} borderWidth="1px" borderRadius="lg">
        <Text fontWeight="bold" mb={2}>
          {index + 1}. {question.text}
        </Text>
        <QuestionOptionList options={question.options} />
        {question.options.length === 0 && (
          <Input placeholder="Enter your answer" />
        )}
      </Box>
    ))}
  </VStack>
);
