export type QuizzType = {
  id: string;
  title: string;
  createdAt: Date;
  questionsCount: number;
};

export type QuizWithCount = {
  id: string;
  title: string;
  createdAt: Date;
  _count: { questions: number };
};

export type AnswerOptionInput = {
  text: string;
  isCorrect?: boolean;
};

export type QuestionType = "BOOLEAN" | "INPUT" | "CHECKBOX";

export type QuestionInput = {
  text: string;
  type: QuestionType;
  options?: AnswerOptionInput[];
  correctAnswer?: string;
};

export type QuizInput = {
  title: string;
  questions: QuestionInput[];
};

export type QuizCardProps = {
  id: string;
  title: string;
  questionsCount: number;
  setSelectedQuiz: React.Dispatch<React.SetStateAction<string | null>>;
};

export type QuizListProps = {
  list: QuizCardProps[];
  setSelectedQuiz: React.Dispatch<React.SetStateAction<string | null>>;
};

export type Question = {
  id: string;
  text: string;
  options: Option[];
  correctAnswer?: string;
  type: QuestionType;
};

export type Option = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type QuestionListProps = {
  questions: Question[];
};

export type QuestionOptionListProps = {
  options: Option[];
  type: QuestionType;
};

export type DeleteQuizModalProps = {
  selectedQuiz: string | null;
  cancelDeleting: () => void;
  deleteQuiz: (id: string) => void;
};

export type QuizForm = {
  title: string;
  questions: QuestionForm[];
};

export type QuestionForm = {
  text: string;
  type: QuestionType;
  options: OptionForm[];
};

export type OptionForm = {
  text: string;
  isCorrect: boolean;
};

export type QuestionInputRendererProps = {
  question: QuestionInput;
  index: number;
  updateQuestion: (index: number, question: Partial<QuestionInput>) => void;
  updateOption: (
    qIndex: number,
    oIndex: number,
    option: Partial<OptionForm>
  ) => void;
  addOption: (qIndex: number) => void;
};

export type QuestionInputListProps = {
  questions: QuestionInput[];
  updateQuestion: (index: number, question: Partial<QuestionInput>) => void;
  updateOption: (
    qIndex: number,
    oIndex: number,
    option: Partial<OptionForm>
  ) => void;
  addOption: (qIndex: number) => void;
  removeQuestion: (index: number) => void;
};
