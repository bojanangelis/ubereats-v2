import { View } from "react-native";
import React from "react";
import BottomIcon from "./BottomIcon";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}>
      <BottomIcon icon="home" text="Home" />
      <BottomIcon icon="search" text="Browse" />
      <BottomIcon icon="shopping-bag" text="Grocery" />
      <BottomIcon icon="receipt" text="Orders" />
      <BottomIcon icon="user" text="Account" />
    </View>
  );
}
