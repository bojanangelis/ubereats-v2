import { View, Image } from "react-native";
import React from "react";

export default function FoodImage({ image }) {
  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, borderRadius: 8 }}
      />
    </View>
  );
}
