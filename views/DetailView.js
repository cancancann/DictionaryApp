import React, { useCallback } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import Box from "../components/Box";
import Text from "../components/Text";
import { useFocusEffect } from "@react-navigation/native";

const DetailView = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  return (
    <Box flex={1} bg="softRed" p={16}>
      <Text>Detay</Text>
    </Box>
  );
};

export default DetailView;
