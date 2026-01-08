import { Box, Container, Flex } from "@chakra-ui/react";
import { APP_ROUTES } from "@/constants";
import texts from "@root/texts.json";
import { NavLink } from "react-router-dom";
import { Nav } from "@/components";

export const Header = () => (
  <Box as="header" bg="white" borderBottom="1px solid" borderColor="gray.200">
    <Container maxW="container.lg">
      <Flex h="4rem" align="center" justify="space-between" fontWeight="bold">
        <NavLink to={APP_ROUTES.ALL_QUIZES}>{texts.app_name}</NavLink>
        <Nav />
      </Flex>
    </Container>
  </Box>
);
