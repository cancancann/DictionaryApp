import { StatusBar, StyleSheet, Text } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Box from "../components/Box";

const HistoryView = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );
  return (
    <Box as={SafeAreaView} flex={1} alignItems="center" justifyContent="center" >
      <Text>HistoryView</Text>
    </Box>
  );
};

export default HistoryView;

const styles = StyleSheet.create({});
