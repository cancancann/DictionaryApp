import { TextInput } from "react-native";
import styled from "styled-components";
import {
  color,
  compose,
  size,
  space,
  typography,
  borderRadius,
} from "styled-system";
import theme from "../utils/theme";

const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || "#fff",
}))(compose(color, size, space, typography, borderRadius));

export default Input;
