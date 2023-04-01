import { StyleSheet, Text, View } from "react-native";
import React from "react";


//svg import
import BookMark from "../icons/bookmark.svg";


const DetailView = () => {
  return (
    <View>
      <Text>DetailView</Text>
      <View>
        <BookMark  width={50} height={50} fill="none" stroke="black" strokeOpacity="0.7" />
      </View>
    </View>
  );
};

export default DetailView;

const styles = StyleSheet.create({});
