import React from "react";
import MapView from "react-native-maps";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "../GlobalStyles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { mapViewDark } from "../constants";
import { useNavigation } from "@react-navigation/native";
import Mental from "../screens/Mental";

const HomeContent = () => {
  const navigation = useNavigation();
  const handlePhysical = () => {
    navigation.navigate("Physical");
  };
  const handleMental = () => {
    navigation.navigate("Mental");
  };
  return (
    <View className="flex-1 px-5">
      {/* Map */}
      <View
        className="w-full h-1/2 rounded-lg mb-4 overflow-hidden"
        style={GlobalStyles.bgColor}
      >
        <MapView
          className="w-full h-full rounded-xl shadow-lg"
          customMapStyle={mapViewDark}
        />
      </View>
      {/* Sections */}
      <View className="w-full flex-row h-32 justify-between">
        <TouchableOpacity
          className="w-[48%] h-full rounded-lg items-center justify-center"
          style={GlobalStyles.bgColor}
          onPress={handlePhysical}
        >
          <FontAwesome name="heartbeat" color="gold" size={60} />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-[48%] h-full rounded-lg items-center justify-center"
          style={GlobalStyles.bgColor}
          onPress={handleMental}
        >
          <MaterialCommunityIcons name="meditation" color="gold" size={60} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeContent;
