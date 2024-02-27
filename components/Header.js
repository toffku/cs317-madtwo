import React from "react";

import { View, Text } from "react-native";

const Header = () => {
  return (
    <View className="flex-1">
      {/* Title */}
      <View className="w-full h-20 items-center justify-center">
        <Text className="text-2xl text-yellow-400">LIFT</Text>
      </View>
      {/* Header Section */}
      <View className="w-full h-2/5 items-start p-10">
        <Text className="text-sm text-gray-100">Welcome back,</Text>
        <Text className="text-3xl text-yellow-400">Scott</Text>
      </View>
    </View>
  );
};

export default Header;
