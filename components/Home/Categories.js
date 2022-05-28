import React from "react";
import { ScrollView, Image, Text, View } from "react-native";

const items = [
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 18,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map(({ text, image }) => (
          <View key={text} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={image}
              style={{ width: 50, height: 50, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13.5, fontWeight: "700" }}>{text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
