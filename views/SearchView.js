import {
  Animated,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import TdkLogo from "../icons/tdk_logo-white.svg";
import Search from "../components/Search";
import Box from "../components/Box";
import bg from "../assets/background.jpg";
import { CardContainer, CardSummary, CardTitle } from "../components/Card";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item 1",
    summary: "First Item 1 ",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item 2 ",
    summary: "First Item 2 ",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item 3 ",
    summary: "First Item 3 ",
  },
];

const SearchView = ({ navigation }) => {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [heroHeight] = useState(new Animated.Value(285));

  //AnimatedHeader
  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 250,
        useNativeDriver: false, //Expo cli kullanıldığı için false normalde native cli kullansan true
      }).start();
    }
  }, [heroHeight, isSearchFocus]);

  //StatusBArConfig
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? "dark-content" : "light-content");
    }, [isSearchFocus])
  );

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? "softRed" : "red"} flex={1}>
      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        {/* background */}
        {!isSearchFocus && (
          <Box
            as={ImageBackground}
            source={bg}
            style={{ width: "100%", height: "100%" }}
          >
            {/* Logo */}
            <Box flex={1} alignItems="center" justifyContent="center">
              <TdkLogo width={120} color="white" />
            </Box>
          </Box>
        )}
        {/* Search */}
        <Box
          position="absolute"
          bottom={isSearchFocus ? 0 : -42}
          left={0}
          width="100%"
          p={16}
        >
          <Search onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>

      {/* content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>History</Text>
          </Box>
        ) : (
          <Box p={20} flex={1}>
            <Box>
              <Text color="textLight">Bir Deyim</Text>

              <CardContainer
                mt={10}
                onPress={() => navigation.navigate("Details")}
              >
                <CardTitle>on para</CardTitle>
                <CardSummary>çok az (para).</CardSummary>
              </CardContainer>
            </Box>
            <Box mt={25}>
              <Text color="textLight">Bir deyim - Atasözü</Text>

              <CardContainer
                mt={10}
                onPress={() => navigation.navigate("Details")}
              >
                <CardTitle>siyem siyem ağlamak</CardTitle>
                <CardSummary>
                  hafif hafif, ince ince, durmadan gözyaşı dökmek.
                </CardSummary>
              </CardContainer>
            </Box>

            {/* <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Box py={5}>
                  <CardContainer>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSummary>{item.summary}</CardSummary>
                  </CardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            /> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchView;
