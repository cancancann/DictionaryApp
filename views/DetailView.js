import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar, ScrollView } from "react-native";

import Box from "../components/Box";
import Text from "../components/Text";
import {
  DetailSummaryContainer,
  DetailSummaryTitle,
  DetailSummaryTitleSolid,
} from "../components/DetailSummary";
import ActionButton, { ActionButtonTitle } from "../components/ActionButton";

import HandIcon from "../icons/hand.svg";
import HandSolidIcon from "../icons/hand2.svg";
import SoundIcon from "../icons/Sound.svg";
import SoundSolidIcon from "../icons/Sound2.svg";
import KaydetIcon from "../icons/kaydet.svg";
import KaydetSolidIcon from "../icons/kaydet2.svg";

import theme from "../utils/theme";

const DetailView = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  return (
    <Box flex={1} bg="softRed">
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={25} fontWeight="bold">
            Detay
          </Text>
          <Text color="textLight" mt={8}>
            Arapça Kalem
          </Text>
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton>
            <SoundIcon width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>

          <ActionButton ml={12}>
            <KaydetSolidIcon width={24} height={24} color={theme.colors.red} />
          </ActionButton>

          <ActionButton ml="auto">
            <HandIcon width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          <DetailSummaryContainer>
            <DetailSummaryTitle>
              Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
            </DetailSummaryTitle>
            <DetailSummaryTitleSolid>
              "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
              Atay
            </DetailSummaryTitleSolid>
          </DetailSummaryContainer>

          <DetailSummaryContainer border>
            <DetailSummaryTitle>
              Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
            </DetailSummaryTitle>
            <DetailSummaryTitleSolid>
              "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
              Atay
            </DetailSummaryTitleSolid>
          </DetailSummaryContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailView;
