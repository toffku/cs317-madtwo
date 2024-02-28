import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GlobalStyles from "../global/GlobalStyles";

const WorkoutStats = () => {
  return (
    <View
      className="w-full flex-row h-20 p-5 justify-between items-center"
      style={styles.borderStyles}
    >
      <View className="w-[30%] h-full">
        <Text className=" text-yellow-400 text-xs">Duration</Text>
        <Text className=" text-gray-100 text-lg pt-1">5mins 36s</Text>
      </View>
      <View className="w-[30%]  h-full">
        <Text className=" text-yellow-400 text-xs">Volume</Text>
        <Text className=" text-gray-100 text-lg pt-1">56kg</Text>
      </View>
      <View className="w-[30%]  h-full">
        <Text className="text-yellow-400 text-xs">Sets</Text>
        <Text className=" text-gray-100  text-lg pt-1">12</Text>
      </View>
    </View>
  );
};

export default WorkoutStats;

const styles = StyleSheet.create({
  borderStyles: {
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
});
