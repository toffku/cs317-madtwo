import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontComponent from "./FontComponent";
import GlobalStyles from "../global/GlobalStyles";

const WorkoutCounter = () => {
  return (
    <TouchableOpacity
      className="w-56 h-56 rounded-full mt-10 p-8 justify-around items-center"
      style={GlobalStyles.bgColor}
    >
      <FontComponent className="text-lg text-white" bold={true}>
        My Workouts
      </FontComponent>
    </TouchableOpacity>
  );
};

export default WorkoutCounter;
