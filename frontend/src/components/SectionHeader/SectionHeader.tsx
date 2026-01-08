import { Box, Heading, Text } from "@chakra-ui/react";
import type { SectionHeaderProps } from "@/types";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => (
  <Box>
    <Heading size="lg" mb={1}>
      {title}
    </Heading>
    {subtitle && <Text color="gray.600">{subtitle}</Text>}
  </Box>
);
