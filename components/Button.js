import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import {
  color,
  compose,
  flexbox,
  layout,
  size,
  space,
  borderRadius,
} from "styled-system";

const Button = styled(TouchableOpacity)(
  compose(color, size, space, flexbox, layout, borderRadius)
);

Button.defaultProps = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

export default Button;
