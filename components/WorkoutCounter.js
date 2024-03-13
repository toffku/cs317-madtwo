import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontComponent from "./FontComponent";
import GlobalStyles from "../global/GlobalStyles";

const WorkoutCounter = ({ workoutCount }) => {
  return (
    <TouchableOpacity
      className="w-72 h-72 rounded-full mt-10 p-8 justify-center items-center"
      style={GlobalStyles.bgColor}
    >
      <Text
        className="text-8xl font-bold text-center text-white leading-loose"
        style={{ transform: [{ translateY: 10 }] }}
      >
        {workoutCount ? workoutCount : 0}
      </Text>
    </TouchableOpacity>
  );
};

export default WorkoutCounter;
