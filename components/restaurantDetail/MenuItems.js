import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import FoodInfo from "./FoodInfo";
import FoodImage from "./FoodImage";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tommato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Carbonara",
    description: "Carbonara, the best one ever, olive oil",
    price: "$19.50",
    image:
      "https://www.thespruceeats.com/thmb/SX7AEAMQwKV676yMFKWoVSE95Go=/1000x1000/smart/filters:no_upscale()/pasta-carbonara-recipe-5210168-hero-01-80090e56abc04ca19d88ebf7fad1d157.jpg",
  },
  {
    title: "Fruit salad",
    description: "Strawbery, ananas, blueberry, kiwi",
    price: "$10.50",
    image:
      "https://www.livewellbakeoften.com/wp-content/uploads/2020/03/Fruit-Salad-5.jpg",
  },
  {
    title: "Sandwich",
    description: "Bread, cheas, bacon",
    price: "$10.50",
    image:
      "https://static.toiimg.com/thumb/54714340.cms?imgsize=458099&width=800&height=800",
  },
];

export default function MenuItem({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName,
        checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCat = (food, cartItems) => {
    return Boolean(cartItems.find((item) => item.title === food.title));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food) => (
        <View key={food.image}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 4 }}
              fillColor="#00D100"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCat(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage image={food.image} />
          </View>
          <Divider
            width={0.5}
            orientation={"vertical"}
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 18,
  },
});
