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
  const handleTools = () => {
    navigation.navigate("Tools");
  };

  const handleMap = () => {
    navigation.navigate("Map");
  };
  return (
    <View className="flex-1 px-5  justify-end">
      {/* Map */}
      <TouchableOpacity
        className="w-full h-24 rounded-lg mb-4 p-3 justify-around items-center"
        style={GlobalStyles.bgColor}
        onPress={handleMap}
      >
        <MaterialCommunityIcons
          name="map-marker-radius"
          color={themeColor}
          size={40}
        />
        <FontComponent className=" text-[12px]" style={GlobalStyles.themeText}>
          Find a gym near me
        </FontComponent>
      </TouchableOpacity>
      <TouchableOpacity
        className="w-full h-24 rounded-lg mb-4 p-3 overflow-hidden justify-around items-center"
        style={GlobalStyles.bgColor}
        onPress={handleTools}
      >
        <MaterialCommunityIcons
          name="hammer-wrench"
          color={themeColor}
          size={40}
        />
        <FontComponent className=" text-[12px]" style={GlobalStyles.themeText}>
          Tools
        </FontComponent>
      </TouchableOpacity>
    </View>
  );
};

export default HomeContent;
