import { Checkbox, HStack, Input, RadioGroup, Text } from "@chakra-ui/react";
import type { QuestionOptionListProps } from "@/types";
import { QUESTION_TYPE } from "@/constants";
import { Check } from "lucide-react";

export const QuestionOptionList: React.FC<QuestionOptionListProps> = ({
  options,
  type,
}) => {
  if (type === "BOOLEAN") {
    return (
      <RadioGroup.Root>
        <HStack gap={6}>
          {options?.map((opt, idx) => (
            <RadioGroup.Item key={idx} value={idx.toString()}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>{opt.text}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </HStack>
      </RadioGroup.Root>
    );
  }

  if (type === QUESTION_TYPE.CHECKBOX) {
    return (
      <>
        {options?.map((opt, idx) => (
          <HStack key={idx}>
            <Checkbox.Root>
              <Checkbox.HiddenInput />
              <Checkbox.Control>
                <Checkbox.Indicator>
                  <Check size={16} />
                </Checkbox.Indicator>
              </Checkbox.Control>
            </Checkbox.Root>
            <Text>{opt.text}</Text>
          </HStack>
        ))}
      </>
    );
  }
  return <Input placeholder="Enter your answer" />;
};
