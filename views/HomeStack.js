import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchView from "./SearchView";
import DetailView from "./DetailView";
import theme from "../utils/theme";

import LeftIcon from "../icons/left.svg";
import MoreIcon from "../icons/more.svg";
import Button from "../components/Button";

const Stack = createNativeStackNavigator();
//otamatik navigation oluşuyor
//nereden tıklamak istediğini oraya göre navigation propu geçiyorsun dipnot

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchView}
        options={() => {
          return {
            header: () => {},
          };
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailView}
        options={({ route, navigation }) => {
          return {
            title: (route.params && route.params.title) || "Boş",
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              // shadowColor: "transparent", //çalışmıyor sebebini anlamadım tekrar dönüp bakacağım
            },
            headerLeft: () => (
              <Button
                height="100%"
                px={10}
                onPress={() => navigation.navigate("Search")}
              >
                <LeftIcon color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button
                height="100%"
                px={10}
                onPress={() => navigation.navigate("Search")}
              >
                <MoreIcon color={theme.colors.textDark} />
              </Button>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
