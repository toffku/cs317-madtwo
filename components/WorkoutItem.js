import {
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Set from "./Set";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import FontComponent from "./FontComponent";

const WorkoutItem = ({ exercise, handleSets, handleVolume }) => {
  const [sets, setSets] = useState([1]);
  const addSet = () => {
    setSets([...sets, {}]); // Add an empty object to represent a new set
  };

  const handleDelete = (index) => {
    setSets((prevSets) => prevSets.filter((set, i) => i !== index));
  };

  return (
    <View className="w-full flex-1 ">
      <View className="w-full p-5 flex-row justify-between items-center">
        <FontComponent bold={true} className="text-white text-xl">
          {exercise.name}
        </FontComponent>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={25} color={themeColor} />
        </TouchableOpacity>
      </View>
      <View className="w-[90%] px-5 py-1 mb-3 rounded-lg flex-row justify-between items-center">
        <FontComponent className="text-white text-[12px]">Set</FontComponent>
        <FontComponent className="text-white text-[12px]">
          Weight (kg)
        </FontComponent>
        <FontComponent className="text-white text-[12px]">Reps</FontComponent>
        <FontComponent className="text-white"> </FontComponent>
      </View>

      <View className="mb-2">
        {sets.map((set, index) => (
          <Set
            key={index}
            index={index}
            handleDelete={handleDelete}
            handleSets={handleSets}
            handleVolume={handleVolume}
          />
        ))}
      </View>

      <Pressable
        className="w-full h-10 items-center justify-center rounded-lg text-gray-400 flex-row mb-5"
        style={GlobalStyles.bgColor}
        onPress={addSet}
      >
        <Ionicons name="add" size={20} color="white" />
        <FontComponent className="text-white text-lg px-1">
          Add Set
        </FontComponent>
      </Pressable>
    </View>
  );
};

export default WorkoutItem;
