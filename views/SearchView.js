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

//useNastiveDraiver warning hatasını çözmeye çalış 

const SearchView = () => {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [heroHeight] = useState(new Animated.Value(285));

  //AnimatedHeader
  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 1,
        duration: 5000,
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 5000,
      }).start();
    }
  }, [heroHeight, isSearchFocus]);

  //StatusBArConfig
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
    }, [])
  );

  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        {/* background */}
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: "100%", height: "100%" }}
        >
          {/* Logo */}
          <Box flex={1} alignItems="center" justifyContent="center">
            <TdkLogo width={120} color="white" />
          </Box>
          {/* Search */}
          <Box p={16} mb={-42}>
            <Search onChangeFocus={(status) => setSearchFocus(status)} />
          </Box>
        </Box>
      </Box>

      {/* content */}
      <Box flex={1} bg="white" pt={26}>
        <Box p={30} flex={1}>
          <Text>Hello</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchView;
