import { Button, Flex, Input } from "@chakra-ui/react";
import type { QuestionInputListProps } from "@/types";
import { QuestionInput } from "./../QuestionInput";

export const QuestionInputList: React.FC<QuestionInputListProps> = ({
  questions,
  updateQuestion,
  updateOption,
  addOption,
  removeQuestion,
}) => {
  return (
    <>
      {questions.map((q, i) => (
        <Flex
          key={i}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          w="full"
          flexDirection="column"
        >
          <Flex gap={6}>
            <Input
              placeholder="Question text"
              value={q.text}
              onChange={(e) => updateQuestion(i, { text: e.target.value })}
            />
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => removeQuestion(i)}
            >
              Delete
            </Button>
          </Flex>
          <Flex justify="space-between">
            <QuestionInput
              question={q}
              index={i}
              updateQuestion={updateQuestion}
              updateOption={updateOption}
              addOption={addOption}
            />
          </Flex>
        </Flex>
      ))}
    </>
  );
};
