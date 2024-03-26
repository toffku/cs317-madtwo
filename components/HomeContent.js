import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  Linking,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
    <View className="flex-1 px-5 justify-end">
      {/* Sections */}
      <TouchableOpacity
        className="w-full h-24 rounded-lg items-center justify-center mb-5 p-5"
        style={GlobalStyles.bgColor}
        onPress={handleMap}
      >
        <MaterialCommunityIcons
          name="map-marker-radius"
          color={themeColor}
          size={30}
        />
        <FontComponent className="mt-1" style={GlobalStyles.themeText}>
          Find a gym near me
        </FontComponent>
      </TouchableOpacity>
      <TouchableOpacity
        className="w-full h-24 rounded-lg items-center justify-center mb-5"
        style={GlobalStyles.bgColor}
        onPress={handleTools}
      >
        <MaterialCommunityIcons name="tools" color={themeColor} size={30} />
        <FontComponent className="mt-1" style={GlobalStyles.themeText}>
          Tools
        </FontComponent>
      </TouchableOpacity>
    </View>
  );
};

export default HomeContent;
