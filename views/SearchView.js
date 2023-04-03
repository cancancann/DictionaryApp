import {
  Animated,
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


const SearchView = () => {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [heroHeight] = useState(new Animated.Value(285));

  //AnimatedHeader
  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 250,
        useNativeDriver:false
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 250,
        useNativeDriver:false //Expo cli kullanıldığı için false normalde native cli kullansan true
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
      <Box flex={1} bg="white" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>History</Text>
          </Box>
        ) : (
          <Box p={30} flex={1}>
            <Text>Öneri</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchView;
