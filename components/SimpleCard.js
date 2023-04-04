import React from "react";
import Text from "./Text";
import Button from "./Button";

const SimpleCardContainer = ({ children, ...props }) => {
  return (
    <Button
      justifyContent="flex-start"
      bg="white"
      p={16}
      borderRadius="normal"
      {...props}
    >
      {children}
    </Button>
  );
};

const SimpleCardTitle = ({ children }) => {
  return (
    <Text fontSize={16} fontWeight="bold">
      {children}
    </Text>
  );
};

export { SimpleCardTitle, SimpleCardContainer };
