import React, { useState } from "react";
import { Keyboard } from "react-native";
import Box from "./Box";
import Input from "./Input";
import SearchIcon from "../icons/search.svg";
import theme from "../utils/theme";
import Text from "./Text";
import Button from "./Button";
import Close from "../icons/close.svg";

const Search = () => {
  const [isFocus, setFocus] = useState(false);

  const onClose = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
          bg="white"
          height={52}
          color="textDark"
          borderWidth={1}
          borderColor={isFocus ? "#D1D1D1" : "transparent"}
          placeholder="Türkçe Sözlük’te Ara"
          placeholderTextColor="textMedium"
          borderRadius="normal"
          pl={52}
          onFocus={() => setFocus(true)}
        />
        <Box position="absolute" right={16} top={14}>
          <Close />
        </Box>
        <Box position="absolute" left={16} top={14}>
          <SearchIcon stroke={theme.colors.textMedium} />
        </Box>
      </Box>
      {isFocus && (
        <Button onPress={onClose} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
};

export default Search;
