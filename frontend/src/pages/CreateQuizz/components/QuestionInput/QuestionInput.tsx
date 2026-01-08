import {
  Button,
  Checkbox,
  HStack,
  Input,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Check } from "lucide-react";
import type { QuestionInputRendererProps } from "@/types";
import texts from "@root/texts.json";
import { QUESTION_TYPE } from "@/constants";

export const QuestionInput: React.FC<QuestionInputRendererProps> = ({
  question,
  index,
  updateQuestion,
  updateOption,
  addOption,
}) => {
  switch (question.type) {
    case QUESTION_TYPE.BOOLEAN: {
      const selectedValue =
        question.options?.findIndex((opt) => opt.isCorrect)?.toString() ?? "";

      return (
        <VStack align="start" mt={4}>
          <RadioGroup.Root
            value={selectedValue}
            onValueChange={({ value }) => {
              question.options?.forEach((_, idx) => {
                updateOption(index, idx, {
                  isCorrect: idx.toString() === value,
                });
              });
            }}
          >
            <HStack gap={6}>
              {question.options?.map((opt, idx) => (
                <RadioGroup.Item key={idx} value={idx.toString()}>
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>{opt.text}</RadioGroup.ItemText>
                </RadioGroup.Item>
              ))}
            </HStack>
          </RadioGroup.Root>

          <Text fontSize="sm" color="gray.500">
            {texts.select_answer}
          </Text>
        </VStack>
      );
    }

    case QUESTION_TYPE.CHECKBOX:
      return (
        <VStack align="start" mt={4}>
          {question.options?.map((opt, idx) => (
            <HStack key={idx}>
              <Checkbox.Root
                checked={opt.isCorrect}
                onCheckedChange={(checked) =>
                  updateOption(index, idx, { isCorrect: !!checked })
                }
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control>
                  <Checkbox.Indicator>
                    <Check size={16} />
                  </Checkbox.Indicator>
                </Checkbox.Control>
              </Checkbox.Root>

              <Input
                placeholder={texts.option_text}
                value={opt.text}
                onChange={(e) =>
                  updateOption(index, idx, { text: e.target.value })
                }
              />
            </HStack>
          ))}

          <Button size="sm" onClick={() => addOption(index)}>
            {texts.add_option}
          </Button>
        </VStack>
      );

    case QUESTION_TYPE.INPUT:
      return (
        <VStack align="start" mt={4}>
          <Input
            placeholder={texts.correct_answer}
            value={question.correctAnswer}
            onChange={(e) =>
              updateQuestion(index, { correctAnswer: e.target.value })
            }
          />
        </VStack>
      );

    default:
      return null;
  }
};
