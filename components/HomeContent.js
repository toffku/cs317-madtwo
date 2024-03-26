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
    <View className=" px-5 justify-end">
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
        <FontComponent className="text-[12px]" style={GlobalStyles.themeText}>
          Tools
        </FontComponent>
      </TouchableOpacity>
    </View>
  );
};

export default HomeContent;
