import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../global/GlobalStyles";
import FontComponent from "./FontComponent";

const WorkoutStats = ({ volume, sets }) => {
  const [totalVolume, setTotalVolume] = useState(0);
  const [totalSets, setTotalSets] = useState(0);

  useEffect(() => {
    setTotalVolume((prevTotalVolume) => prevTotalVolume + volume);
    setTotalSets((prevTotalSets) => prevTotalSets + sets);
  }, [volume, sets]);
  return (
    <View
      className="w-full flex-row h-20 p-5 justify-between items-center"
      style={styles.borderStyles}
    >
      <View className="w-[30%] h-full">
        <FontComponent className="   text-xs" style={GlobalStyles.themeText}>
          Duration
        </FontComponent>
        <FontComponent className=" text-gray-100 text-lg pt-1">
          --
        </FontComponent>
      </View>
      <View className="w-[30%]  h-full">
        <FontComponent className="   text-xs" style={GlobalStyles.themeText}>
          Volume
        </FontComponent>
        <FontComponent className=" text-gray-100 text-lg pt-1">
          {totalVolume}
        </FontComponent>
      </View>
      <View className="w-[30%]  h-full">
        <FontComponent className="  text-xs" style={GlobalStyles.themeText}>
          Sets
        </FontComponent>
        <FontComponent className=" text-gray-100  text-lg pt-1">
          {totalSets}
        </FontComponent>
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
