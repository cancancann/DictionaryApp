import React from "react";

import Box from "./Box";
import Text from "./Text";

const DetailSummaryContainer = ({ children, border, ...props }) => {
  return (
    <Box position="relative" bg="white" px={28} py={20} {...props}>
      {border && (
        <Box position="absolute" left={12} right={12} height={1} bg="light" />
      )}
      <Box flexDirection="row">
        <Text color="textLight" ml={-14} mr={8}>
          1
        </Text>
        <Text color="red">İSİM</Text>
      </Box>
      <Box mt={8}>{children}</Box>
    </Box>
  );
};

const DetailSummaryTitle = ({ children, ...props }) => {
  return <Text fontWeight="600">{children}</Text>;
};
const DetailSummaryTitleSolid = ({ children, ...props }) => {
  return (
    <Text ml={10} mt={12} color="textLight" fontWeight="500">
      {children}
    </Text>
  );
};

export { DetailSummaryContainer, DetailSummaryTitle, DetailSummaryTitleSolid };
