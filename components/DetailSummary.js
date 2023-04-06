import React from "react";

import Box from "./Box";
import Text from "./Text";

const DetailSummaryContainer = ({ data, children, border, ...props }) => {
  return (
    <Box position="relative" bg="white" px={28} py={20} {...props}>
      {border && (
        <Box position="absolute" left={12} right={12} height={1} bg="light" />
      )}

      {/* body */}
      {data ? (
        <Box>
          <Box flexDirection="row">
            <Text color="textLight" ml={-14} mr={8}>
              {data.anlam_sira}
            </Text>
            <Text color="red">İSİM</Text>
          </Box>

          <Box mt={8}>
            <Text fontWeight="600">Title</Text>
            <Text ml={10} mt={12} color="textLight" fontWeight="500">
              örnekler
            </Text>
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  );
};

export default DetailSummaryContainer;
