import { Box, VStack } from "@chakra-ui/react";
import type { QuestionOptionListProps } from "@/types";

export const QuestionOptionList: React.FC<QuestionOptionListProps> = ({
  options,
}) => (
  <VStack align="stretch" gap={2}>
    {options.map((option) => (
      <Box
        key={option.id}
        p={2}
        borderWidth="1px"
        borderRadius="md"
        bg="gray.50"
      >
        {option.text}
      </Box>
    ))}
  </VStack>
);
