import { StyleSheet, Text, View } from "react-native";
import React from "react";

//svg import
import BookmarkIcon from "../icons/bookmark.svg";
import BoxCenter from "../components/BoxCenter";

const DetailView = () => {
  return (
    <BoxCenter>
      <Text>DetailView</Text>
      <View>
        <BookmarkIcon
          width={50}
          height={50}
          fill="none"
          stroke="black"
          strokeOpacity="0.7"
        />
      </View>
    </BoxCenter>
  );
};

export default DetailView;

const styles = StyleSheet.create({});
