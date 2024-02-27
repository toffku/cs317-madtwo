import React from "react";

import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View className="flex-1">
      {/* Logo */}
      <View className="w-full h-20 items-center justify-center">
        <View>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 110, height: 110, resizeMode: "contain" }}
          />
        </View>
      </View>
      {/* Header Section */}
      <View className="w-full h-3/5 items-start px-10 ">
        <Text className="text-sm text-gray-100">Welcome back,</Text>
        <Text className="text-4xl font-semibold py-3 text-yellow-400">
          Scott
        </Text>

        <Text className="text-[18px] text-gray-100">
          You have completed <Text className="text-xl font-bold">0</Text>{" "}
          workouts
        </Text>
        <Text className="text-[12px] text-gray-100 pt-3">
          Checkout the{" "}
          <Text className="font-semibold text-[14px] ">Workouts</Text> tab
        </Text>
        <Text className="text-[12px] text-gray-100">
          to{" "}
          <Text className="text-[14px] font-bold text-blue-600">
            Get Started
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Header;
