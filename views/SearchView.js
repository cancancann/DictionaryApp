import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import BoxCenter from "../components/BoxCenter";

const SearchView = ({ navigation }) => {
  return (
    <BoxCenter>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </BoxCenter>
  );
};

export default SearchView;

const styles = StyleSheet.create({});
