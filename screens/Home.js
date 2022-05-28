import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import HeaderTab from "../components/Home/HeaderTab";
import RestaurantItem from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";

const YELP_API_KEY =
  "OrNi1lmRzRFSdMJUb4QoZWoYlA-iXA_AnOYM5PYLQ-8k8gd9ACg0jpv9wZqjqJyes--A3eco3VporDm4X_cPtX6AAGdfEcX6TSEmCckLoCOeSm6yylMcOglb65pHYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState();
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromTelp = () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(url, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((item) =>
            item.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromTelp();
  }, [city, activeTab]);

  const handleCity = (values) => {
    setCity(values);
  };

  const handleActiveTab = (values) => {
    setActiveTab(values);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fffff", flex: 1 }}>
      <View style={{ padding: 15 }}>
        <HeaderTab activeTab={activeTab} handleActiveTab={handleActiveTab} />
        <SearchBar handleCity={handleCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
