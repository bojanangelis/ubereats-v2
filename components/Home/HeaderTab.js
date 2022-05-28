import { View } from "react-native";
import React from "react";
import HeaderButton from "./HeaderButton";

export default function HeaderTab({ handleActiveTab, activeTab }) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text={"Delivery"}
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
      />
      <HeaderButton
        text={"Pickup"}
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
      />
    </View>
  );
}
