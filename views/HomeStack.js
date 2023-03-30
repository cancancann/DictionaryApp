import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchView from "./SearchView";
import DetailView from "./DetailView";

const Stack = createNativeStackNavigator();
//otamatik navigation oluşuyor
//nereden tıklamak istediğini oraya göre navigation propu geçiyorsun dipnot

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={SearchView} />
      <Stack.Screen name="Details" component={DetailView} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
