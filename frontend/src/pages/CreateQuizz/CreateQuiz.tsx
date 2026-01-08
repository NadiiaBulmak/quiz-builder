import { useState } from "react";
import {
  VStack,
  Input,
  Button,
  Heading,
  Flex,
  Text,
  Spinner,
} from "@chakra-ui/react";
import type { QuestionInput, OptionForm } from "@/types";
import { useAddNewQuiz } from "@/hooks";
import { QuestionInputList } from "./components";
import { QUESTION_TYPE } from "@/constants";
import texts from "@root/texts.json";

export const CreateQuizPage = () => {
  const { mutate: createQuiz, isPending } = useAddNewQuiz();

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<QuestionInput[]>([]);

  const addInput = (type: string) => {
    setQuestions((prev) => {
      switch (type) {
        case "BOOLEAN":
          return [
            ...prev,
            {
              text: "",
              type: "BOOLEAN",
              options: [
                { text: "True", isCorrect: false },
                { text: "False", isCorrect: false },
              ],
            },
          ];

        case "INPUT":
          return [
            ...prev,
            {
              text: "",
              type: "INPUT",
              correctAnswer: "",
            },
          ];

        case "CHECKBOX":
          return [
            ...prev,
            {
              text: "",
              type: "CHECKBOX",
              options: [
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
              ],
            },
          ];

        default:
          return prev;
      }
    });
  };

  const addBooleanInput = () => addInput(QUESTION_TYPE.BOOLEAN);
  const addTextInput = () => addInput(QUESTION_TYPE.INPUT);
  const addCheckboxInput = () => addInput(QUESTION_TYPE.CHECKBOX);

  const updateQuestion = (index: number, question: Partial<QuestionInput>) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], ...question };

    if (question.type === "INPUT") {
      newQuestions[index].options = [];
      newQuestions[index].correctAnswer = question.correctAnswer;
    }

    if (question.type === "BOOLEAN" && !newQuestions[index].options) {
      newQuestions[index].options = [
        { text: "True", isCorrect: false },
        { text: "False", isCorrect: false },
      ];
    }

    setQuestions(newQuestions);
  };

  const removeQuestion = (index: number) =>
    setQuestions([...questions].splice(index, 1));

  const addOption = (qIndex: number) => {
    const newQuestions = [...questions];
    if (!newQuestions[qIndex].options) {
      newQuestions[qIndex].options = [];
    }

    newQuestions[qIndex].options.push({ text: "", isCorrect: false });
    setQuestions(newQuestions);
  };

  const updateOption = (
    qIndex: number,
    oIndex: number,
    option: Partial<OptionForm>
  ) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options![oIndex] = {
      ...newQuestions[qIndex].options![oIndex],
      ...option,
    };
    setQuestions(newQuestions);
  };

  const onSubmit = () => {
    if (!title.trim() || questions.length === 0) return;
    createQuiz({ title, questions });
  };

  return (
    <VStack align="start" gap={4}>
      <Heading>{texts.create_new_quiz}</Heading>
      <Text>{texts.quiz_title}</Text>
      <Input
        placeholder="Enter quiz title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Flex></Flex>

      <QuestionInputList
        questions={questions}
        updateQuestion={updateQuestion}
        updateOption={updateOption}
        addOption={addOption}
        removeQuestion={removeQuestion}
      />

      <Flex w="full" justifyContent="space-between">
        <Flex w="full" flexWrap="wrap" gap={4}>
          <Button type="button" onClick={addBooleanInput}>
            {texts.add_boolean_input}
          </Button>
          <Button type="button" onClick={addTextInput}>
            {texts.add_text_input}
          </Button>
          <Button type="button" onClick={addCheckboxInput}>
            {texts.add_checkbox_input}
          </Button>
        </Flex>
      </Flex>
      <Button
        colorScheme="green"
        bgColor="orange.600"
        maxW="16rem"
        w="full"
        onClick={onSubmit}
      >
        {isPending ? <Spinner size="sm" /> : texts.create_quiz}
      </Button>
    </VStack>
  );
};
