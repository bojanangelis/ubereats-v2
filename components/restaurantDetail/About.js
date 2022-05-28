import { View } from "react-native";
import React from "react";
import RestaurantImage from "./RestaurantImage";
import RestaurantTitle from "./RestaurantTitle";
import RestaurantDescription from "./RestaurantDescription";

export default function About({ route }) {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map(({ title }) => title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+) `;

  return (
    <View>
      <RestaurantImage img={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
