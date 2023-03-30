import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";

const SearchView = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default SearchView;

const styles = StyleSheet.create({});
