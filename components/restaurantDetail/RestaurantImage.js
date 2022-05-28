import { Image } from "react-native";
import React from "react";

export default function RestaurantImage({ img }) {
  return <Image source={{ uri: img }} style={{ width: "100%", height: 180 }} />;
}
