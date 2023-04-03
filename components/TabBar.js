import Button from "./Button";

import SearchIcon from "../icons/search.svg";
import BookmarkIcon from "../icons/bookmark.svg";
import ClockIcon from "../icons/clock.svg";
import Box from "./Box";
import theme from "../utils/theme";

function TabBar({ state, descriptors, navigation }) {
  return (
    <Box
      bg="white"
      flexDirection="row"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.13,
        shadowRadius: 24,
      }}
    >
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
          //SearchButton
          <Box key={label} p={15} bg="white" borderRadius="full" mt={-15}>
            <Button borderRadius="full" size={56} bg="red" onPress={onPress}>
              <SearchIcon width={24} height={24} stroke="white" />
            </Button>
          </Box>
        ) : (
          //tab-button
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={56}
            flex={1}
            onPress={onPress}
          >
            {label === "History" && (
              <ClockIcon
                stroke={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label === "Fav" && (
              <BookmarkIcon
                stroke={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {/* indicatör */}
            <Box
              size={4}
              bg={isFocused ? "red" : "white"}
              mt={6}
              borderRadius="full"
            />
          </Button>
        );
      })}
    </Box>
  );
}

export default TabBar;
