import { View } from "react-native";
import styled from "styled-components";
import { color, compose, flexbox, size, space } from "styled-system";

const Box = styled(View)(compose(color, size, space, flexbox));
//kendin ayarlayabiliyorssun compose içine ne tarz style işlemlerini gireceğini belirtip ayarlayabiliyorsun
//styled içine de ne tarz bir componente bağlı olduğunu belirtmen gerekiyor

export default Box;
