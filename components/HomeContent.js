import React from "react";
import MapView from "react-native-maps";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";
import FontComponent from "./FontComponent";

const HomeContent = () => {
  const navigation = useNavigation();
  const handlePhysical = () => {
    navigation.navigate("Physical");
  };
  const handleMental = () => {
    navigation.navigate("Mental");
  };
  const handleMap = () => {
    navigation.navigate("Map");
  };
  return (
    <View className="flex-1 px-5">
      {/* Map */}
      <TouchableOpacity
        className="w-full h-32 rounded-lg mb-4 p-8 overflow-hidden justify-around items-center"
        style={GlobalStyles.bgColor}
        onPress={handleMap}
      >
        <MaterialCommunityIcons
          name="map-marker-radius"
          color={themeColor}
          size={50}
        />
        <FontComponent
          className="mt-8 text-[12px]"
          style={GlobalStyles.themeText}
        >
          Find a gym near me
        </FontComponent>
      </TouchableOpacity>
      {/* Sections */}
      <View className="w-full flex-row h-32 justify-between">
        <TouchableOpacity
          className="w-[48%] h-full rounded-lg items-center justify-center"
          style={GlobalStyles.bgColor}
          onPress={handlePhysical}
        >
          <FontAwesome name="heartbeat" color={themeColor} size={50} />
          <FontComponent
            className="text-[12px] mt-2"
            style={GlobalStyles.themeText}
          >
            Physical
          </FontComponent>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-[48%] h-full rounded-lg items-center justify-center"
          style={GlobalStyles.bgColor}
          onPress={handleMental}
        >
          <MaterialCommunityIcons
            name="meditation"
            color={themeColor}
            size={60}
          />
          <FontComponent className="text-[12px]" style={GlobalStyles.themeText}>
            Mindfulness
          </FontComponent>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeContent;
