import { Button, HStack } from "@chakra-ui/react";
import { APP_ROUTES } from "@/constants";
import { NavLink } from "react-router-dom";
import texts from "@root/texts.json";

export const Nav = () => (
  <HStack gap={4}>
    <NavLink to={APP_ROUTES.ALL_QUIZES}>
      {({ isActive }) => (
        <Button variant={isActive ? "solid" : "ghost"} colorScheme="teal">
          {texts.nav_links.quizzes}
        </Button>
      )}
    </NavLink>

    <NavLink to={APP_ROUTES.CREATE_QUIZ}>
      {({ isActive }) => (
        <Button variant={isActive ? "solid" : "ghost"} colorScheme="teal" bgColor="orange.600">
          {texts.nav_links.create_quiz}
        </Button>
      )}
    </NavLink>
  </HStack>
);
