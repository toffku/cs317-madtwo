import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import Icon from "react-native-vector-icons/AntDesign";
import Logo from "./Logo";
import FontComponent from "./FontComponent";
import WorkoutCounter from "./WorkoutCounter";

const Header = () => {
  return (
    <View className="flex-1 mb-36">
      {/* Logo */}
      <View className="w-full h-20 items-center justify-center">
        <Logo logoStyle={GlobalStyles.smallLogo} width={24} height={24} />
      </View>
      {/* Header Section */}
      <View className="w-full h-3/5 items-center px-4 ">
        <View className="items-start w-3/4">
          <FontComponent className="text-[12px] text-gray-100">
            Welcome back,
          </FontComponent>
          <FontComponent
            className="text-2xl"
            bold={true}
            style={GlobalStyles.themeText}
          >
            Scott
          </FontComponent>
        </View>
        <WorkoutCounter />
      </View>
    </View>
  );
};

export default Header;
