import { Button, CloseButton, Dialog, Portal, Text } from "@chakra-ui/react";
import type { DeleteQuizModalProps } from "@/types";
import texts from "@root/texts.json";

export const DeleteQuizModal: React.FC<DeleteQuizModalProps> = ({
  selectedQuiz,
  cancelDeleting,
  deleteQuiz,
}) => (
  <Dialog.Root
    open={!!selectedQuiz}
    onOpenChange={(open) => !open && cancelDeleting()}
  >
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>{texts.delete_confirmation}</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Text>{texts.delete_confirmation_text}</Text>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger asChild>
              <Button variant="outline" onClick={cancelDeleting}>
                {texts.cancel}
              </Button>
            </Dialog.ActionTrigger>
            <Button onClick={() => deleteQuiz(selectedQuiz!)}>
              {texts.delete}
            </Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" onClick={cancelDeleting} />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
);
