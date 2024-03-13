import { View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Set from "./Set";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalStyles from "../global/GlobalStyles";
import FontComponent from "./FontComponent";

import WorkoutPopUp from "./WorkoutPopUp";

const WorkoutItem = ({
  exercise,
  handleDeleteItem,
  updateExerciseData,
  index,
}) => {
  const [sets, setSets] = useState([{ volume: 0, isChecked: false }]);
  const addSet = () => {
    setSets([...sets, { volume: 0, isChecked: false }]);
  };

  const handleDeleteSet = (index) => {
    setSets((prevSets) => prevSets.filter((_, i) => i !== index));
  };

  // * Stats logic
  useEffect(() => {
    // Update exercise data whenever sets change
    const itemSets = sets.filter((set) => set.isChecked).length;
    const itemVolume = sets.reduce((totalVolume, set) => {
      const volumeToAdd = set.isChecked ? parseFloat(set.volume) : 0;
      return totalVolume + volumeToAdd;
    }, 0);
    const itemData = {
      volume: itemVolume,
      sets: itemSets,
    };
    updateExerciseData(index, itemData);
  }, [sets]);

  const handleSetChecked = (index, isChecked) => {
    setSets((prevSets) => {
      const updatedSets = [...prevSets];
      updatedSets[index].isChecked = isChecked;
      return updatedSets;
    });
  };

  const handleVolumeChange = (index, volume) => {
    setSets((prevSets) => {
      const updatedSets = [...prevSets];
      updatedSets[index].volume = volume;
      return updatedSets;
    });
  };

  return (
    <View className="w-full flex-1 ">
      <View className="w-full p-5 flex-row justify-between items-center">
        <FontComponent bold={true} className="text-white text-xl w-3/4">
          {exercise.name}
        </FontComponent>
        <WorkoutPopUp handleDeleteItem={handleDeleteItem} />
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
            set={set}
            handleDelete={handleDeleteSet}
            handleSetChecked={handleSetChecked}
            handleVolumeChange={handleVolumeChange}
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
