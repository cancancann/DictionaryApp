import { View } from "react-native";
import styled from "styled-components";
import { color, compose, flexbox, size, space } from "styled-system";

const Box = styled(View)(compose(color, size, space, flexbox));

export default Box;
