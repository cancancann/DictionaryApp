import React from "react";
import Box from "./Box";
import Input from "./Input";
import SearchIcon from "../icons/search.svg";
import theme from "../utils/theme";

const Search = () => {
  return (
    <Box position="relative">
      <Box position="absolute" zIndex={1} left={16} top={14} >
        <SearchIcon stroke={theme.colors.textMedium} />
      </Box> 
      <Input
        bg="white"
        height={52}
        color="textDark"
        placeholder="Türkçe Sözlük’te Ara"
        placeholderTextColor="textMedium"
        borderRadius="normal"
        pl={52}
      />
    </Box>
  );
};

export default Search;
