import { View } from "react-native";
import React from "react";
import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RestaurantItems({ restaurantData, navigation }) {
  return (
    <>
      {restaurantData?.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.image_url}
          activeOpacity={1}
          style={{ marginTop: 10, padding: 15 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }>
          <View>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
