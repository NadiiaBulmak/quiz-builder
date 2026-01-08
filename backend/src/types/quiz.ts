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

export type QuestionInput = {
  text: string;
  type: 'BOOLEAN' | 'INPUT' | 'CHECKBOX';
  options?: AnswerOptionInput[];
  correctAnswer?: string;
};

export type QuizInput = {
  title: string;
  questions: QuestionInput[];
};
