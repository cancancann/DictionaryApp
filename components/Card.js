import React from "react";
import Text from "./Text";
import Box from "./Box";
import Button from "./Button";

const CardContainer = ({ children, ...props }) => {
  return (
    <Button bg="white" py={16} px={12} borderRadius="normal" {...props}>
      <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Button>
  );
};

const CardTitle = ({ children }) => {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  );
};

const CardSummary = ({ children }) => {
  return (
    <Text fontSize={14} mt={6} color="textMedium">
      {children}
    </Text>
  );
};

export { CardTitle, CardSummary, CardContainer };
