import { Text } from "react-native";
import React from "react";
import { Button } from "react-native";

import TdkLogo from "../icons/tdk_logo-white.svg";
import Search from "../components/Search";
import Box from "../components/Box";

const SearchView = ({ navigation }) => {
  return (
    <Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Box py={20}>
        <TdkLogo width={120} stroke="red" />
      </Box>
      <Box p={10}>
        <Search />
      </Box>
    </Box>
  );
};

export default SearchView;
