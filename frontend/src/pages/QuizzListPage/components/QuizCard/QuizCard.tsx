import { Button, Card } from "@chakra-ui/react";
import { HiTrash } from "react-icons/hi";
import type { QuizCardProps } from "@/types";
import { useNavigate } from "react-router-dom";
import texts from "@root/texts.json";

export const QuizCard: React.FC<QuizCardProps> = ({
  id,
  title,
  questionsCount,
  setSelectedQuiz,
}) => {
  const navigate = useNavigate();
  const openQuiz = () => navigate(`/quizzes/${id}`);
  const questionCountText = `${texts.question_count} ${questionsCount}`;
  return (
    <Card.Root w="full">
      <Card.Body gap="2">
        <Card.Title mt="2" truncate>
          {title}
        </Card.Title>
        <Card.Description>{questionCountText}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button onClick={openQuiz}>{texts.join}</Button>
        <Button variant="outline" onClick={() => setSelectedQuiz(id)}>
          <HiTrash size={24} color="red" />
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
