import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderButton({ text, activeTab, handleActiveTab }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? "#181818" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => handleActiveTab(text)}>
      <Text
        style={{
          color: activeTab === text ? "white" : "#181818",
          fontSize: 15,
          fontWeight: "800",
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
