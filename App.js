import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";

import { ThemeProvider } from "styled-components";

import HistoryView from "./views/HistoryView";
import FavView from "./views/FavView";
import HomeStack from "./views/HomeStack";
import TabBar from "./components/TabBar";

import theme from "./utils/theme"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={(props) => <TabBar {...props} />}
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Fav" component={FavView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
