import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ handleCity }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyBRDc2G9mgsXmn1T22nX5hdx1PwQb1IgYg" }} //hide this later
        onPress={(data, details = null) => {
          const city = data.description.split(",")[0];
          handleCity(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "whitesmoke",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "whitesmoke",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" color={"#181818"} size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
            }}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6, color: "#181818" }}
            />
            <Text style={{ color: "#181818" }}>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
