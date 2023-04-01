import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import BoxCenter from "../components/BoxCenter";

import TdkLogo from "../icons/tdk_logo-white.svg"

const SearchView = ({ navigation }) => {
  return (
    <BoxCenter>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />

      <TdkLogo stroke="red"/>

    </BoxCenter>
  );
};

export default SearchView;

