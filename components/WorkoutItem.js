import {
  View,
  Pressable,
  Modal,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
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
  const [modalOpen, setModalOpen] = useState(false);
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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  let difficultyColorClass;
  let level;
  switch (exercise.difficulty) {
    case "beginner":
      difficultyColorClass = "text-green-400";
      level = "Easy";
      break;
    case "intermediate":
      difficultyColorClass = "text-yellow-400";
      level = "Medium";
      break;
    case "expert":
      difficultyColorClass = "text-red-400";
      level = "Hard";
      break;
    default:
      difficultyColorClass = "text-white";
  }

  return (
    <View className="w-full flex-1 ">
      <Modal transparent={true} visible={modalOpen} animationType="fade">
        <View
          className="flex-1 items-center justify-center px-8 py-14"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <View style={GlobalStyles.bgColor} className="p-8 rounded-lg">
            <TouchableOpacity
              className="w-full mb-3 self-end"
              onPress={toggleModal}
            >
              <Ionicons
                name="close-outline"
                size={35}
                color="rgba(255, 255, 255, 0.5)"
              />
            </TouchableOpacity>
            <ScrollView className="flex-1">
              <FontComponent
                className="text-2xl"
                bold={true}
                style={GlobalStyles.themeText}
              >
                {exercise.name}
              </FontComponent>

              <FontComponent
                className={`${difficultyColorClass} mt-5`}
                bold={true}
              >
                {level}
              </FontComponent>
              <FontComponent className="text-white opacity-50 mt-2">
                {exercise.muscle.charAt(0).toUpperCase() +
                  exercise.muscle.slice(1)}
              </FontComponent>

              <FontComponent className="text-white mt-10">
                {exercise.instructions}
              </FontComponent>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View className="w-full p-5 flex-row justify-between items-center">
        <FontComponent bold={true} className="text-white text-xl w-3/4">
          {exercise.name}
        </FontComponent>
        <WorkoutPopUp
          handleDeleteItem={handleDeleteItem}
          toggleModal={toggleModal}
        />
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
