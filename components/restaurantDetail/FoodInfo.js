import { View, Text } from "react-native";
import React from "react";

export default function FoodInfo({ food }) {
  return (
    <View style={{ maxWidth: 210, justifyContent: "space-evenly" }}>
      <Text style={{ fontSize: 19, fontWeight: "600" }}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  );
}
