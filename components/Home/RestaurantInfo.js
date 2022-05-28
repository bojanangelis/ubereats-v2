import { View, Text } from "react-native";
import React from "react";

export default function RestaurantInfo({ name, rating }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}>
      <View>
        <Text style={{ fontSize: 15, fontWeight: "600", color: "#181818" }}>
          {name}
        </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-40 · min</Text>
      </View>
      <View
        style={{
          backgroundColor: "whitesmoke",
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}>
        <Text style={{ fontSize: 13, fontWeight: "500", color: "#181818" }}>
          {rating}
        </Text>
      </View>
    </View>
  );
}
