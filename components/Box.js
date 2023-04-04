import { View } from "react-native";
import styled from "styled-components";
import { border, color, compose, flexbox, size, space } from "styled-system";

const Box = styled(View)(compose(color, size, space, flexbox, border));
//kendin ayarlayabiliyorssun compose içine ne tarz style işlemlerini gireceğini belirtip ayarlayabiliyorsun
//styled içine de ne tarz bir componente bağlı olduğunu belirtmen gerekiyor
//ayrıca default propta webteki gibi geçebiliyorsun

export default Box;
