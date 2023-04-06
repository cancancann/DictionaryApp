import React from "react";
import Button from "./Button";
import theme from "../utils/theme";
import Text from "./Text";

const ActionButton = ({ children, ...props }) => {
  return (
    <Button
      minWidth={theme.sizes.actionButton}
      height={theme.sizes.actionButton}
      borderRadius="full"
      bg="white"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.16,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      }}
      px={8}
      {...props}
    >
      {children}
    </Button>
  );
};

const ActionButtonTitle = ({ children, ...props }) => {
  return (
    <Text color="textLight" fontSize={14} fontWeight="bold" ml={8} mr={8} {...props}>
      {children}
    </Text>
  );
};

export default ActionButton;
export { ActionButtonTitle };
