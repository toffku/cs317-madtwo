import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import WorkoutItem from "./WorkoutItem";
import FontComponent from "./FontComponent";

const WorkoutContent = ({ item, handleSets, handleVolume }) => {
  const navigation = useNavigation();
  const [exercises, setExercises] = useState([]);

  const addItemToExercises = (item) => {
    setExercises([...exercises, item]);
  };

  useEffect(() => {
    if (item) {
      addItemToExercises(item);
    }
  }, [item]);

  const handleAddExercise = () => {
    navigation.navigate("Exercises");
  };

  return (
    <ScrollView className=" flex-1 px-5 mt-2">
      <View className="flex-1 ">
        {exercises.length === 0 ? (
          <View className="items-center py-20">
            <Ionicons name="barbell" color={themeColor} size={60} />
            <View className="items-center mt-8">
              <FontComponent className="text-xl text-white" bold={true}>
                Get Started
              </FontComponent>
              <FontComponent className="text-lg text-gray-400">
                Add an exercise to start your workout
              </FontComponent>
            </View>
          </View>
        ) : (
          exercises.map((x, key) => {
            return (
              <WorkoutItem
                exercise={x}
                key={key}
                handleSets={handleSets}
                handleVolume={handleVolume}
              />
            );
          })
        )}
      </View>
      <Pressable
        className="w-full h-10 items-center justify-center rounded-lg text-gray-400 flex-row mb-5"
        style={GlobalStyles.themeBg}
        onPress={handleAddExercise}
      >
        <Ionicons name="add" size={20} color="white" />
        <FontComponent className=" text-white text-lg px-1">
          Add an exercise
        </FontComponent>
      </Pressable>
      <Pressable
        className="w-full h-10 items-center justify-center rounded-lg text-gray-400 flex-row mb-5"
        style={GlobalStyles.bgColor}
      >
        <FontComponent className="text-red-500 text-lg">
          End Workout
        </FontComponent>
      </Pressable>
    </ScrollView>
  );
};

export default WorkoutContent;
