import { Text } from "react-native";
import React from "react";

export default function RestaurantDescription({ description }) {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}>
      {description}
    </Text>
  );
}
