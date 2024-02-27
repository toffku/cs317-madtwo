import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "../GlobalStyles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeContent = () => {
  return (
    <View className="flex-1 px-5">
      {/* Map */}
      <View
        className="w-full h-1/2 rounded-lg mb-4"
        style={GlobalStyles.bgColor}
      >
        <Text></Text>
      </View>
      {/* Sections */}
      <View className="w-full flex-row h-32 justify-between">
        <TouchableOpacity
          className="w-[48%] h-full rounded-lg items-center justify-center"
          style={GlobalStyles.bgColor}
        >
          <FontAwesome name="heartbeat" color="gold" size={60} />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-[48%] h-full rounded-lg items-center justify-center"
          style={GlobalStyles.bgColor}
        >
          <MaterialCommunityIcons name="meditation" color="gold" size={60} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeContent;
