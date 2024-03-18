import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import FontComponent from "../components/FontComponent";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tools = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <View className="flex-1 items-center justify-around p-5">
        <View className="w-full mb-2">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex-row items-center justify-start w-1/4"
          >
            <Icon name="chevron-left" size={25} color={themeColor} />
            <FontComponent style={GlobalStyles.themeText}>Back</FontComponent>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="w-full h-[45%] items-center justify-center rounded-xl"
          style={GlobalStyles.bgColor}
        >
          <Icon name="angle-acute" size={80} color={themeColor} />
          <FontComponent
            style={GlobalStyles.themeText}
            className="text-2xl"
            bold={true}
          >
            Measure Bench Incline
          </FontComponent>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full h-[45%] items-center justify-center rounded-xl"
          style={GlobalStyles.bgColor}
          onPress={() => navigation.navigate("Accelerometer")}
        >
          <Icon name="rotate-orbit" size={80} color={themeColor} />
          <FontComponent
            style={GlobalStyles.themeText}
            className="text-2xl mt-4"
            bold={true}
          >
            Accelerometer Tool
          </FontComponent>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Tools;
