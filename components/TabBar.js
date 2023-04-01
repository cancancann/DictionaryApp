import { View } from "react-native";
import Button from "./Button";

import SearchIcon from "../icons/search.svg";
import BookmarkIcon from "../icons/bookmark.svg";
import ClockIcon from "../icons/clock.svg";
import Box from "./Box";
import theme from "../utils/theme";

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return label === "Home" ? (
          <Box key={label} p={15} bg="white" borderRadius="full" mt={-15}>
            <Button
              borderRadius="full"
              size={56}
              bg="red"
              onPress={onPress}
            >
              <SearchIcon width={24} height={24} stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={56}
            flex={1}
            onPress={onPress}
          >
            {label === "History" && (
              <ClockIcon stroke={theme.colors.textLight} />
            )}
            {label === "Fav" && (
              <BookmarkIcon stroke={theme.colors.textLight} />
            )}
            <Box size={3} bg={isFocused ? "red" : "white"} mt={6} />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
