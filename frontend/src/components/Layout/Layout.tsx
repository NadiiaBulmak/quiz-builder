import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components";

export const Layout: React.FC = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1" py={8}>
        <Container maxW="container.lg">
          <Outlet />
        </Container>
      </Box>
    </Flex>
  );
};
