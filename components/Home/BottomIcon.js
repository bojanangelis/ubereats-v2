import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomIcon({ icon, text }) {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={icon}
          size={20}
          color={"#181828"}
          style={{ marginBottom: 3, alignSelf: "center" }}
        />
        <Text style={{ fontSize: 12, fontWeight: "400" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
