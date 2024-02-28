import { View, Text, TouchableOpacity, Button, Pressable } from "react-native";
import React from "react";
import { Touchable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalStyles from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const WorkoutContent = () => {
  const navigation = useNavigation();

  const handleAddExercise = () => {
    navigation.navigate("Exercises");
  };

  return (
    <View className="px-5 mt-2">
      <View className="items-center h-1/2 justify-around mb-10 p-4">
        <Ionicons name="barbell" color="gold" size={60} />
        <View className="items-center">
          <Text className="text-xl text-white font-bold">Get Started</Text>
          <Text className="text-lg text-gray-400">
            Add an exercise to start your workout
          </Text>
        </View>
      </View>
      <Pressable
        className="w-full h-10 items-center justify-center rounded-lg text-gray-400 flex-row mb-5"
        style={GlobalStyles.bgColor}
        onPress={handleAddExercise}
      >
        <Ionicons name="add" size={20} color="gold" />
        <Text className="text-yellow-500 text-lg px-1">Add an exercise</Text>
      </Pressable>
      <Pressable
        className="w-full h-10 items-center justify-center rounded-lg text-gray-400 flex-row mb-5"
        style={GlobalStyles.bgColor}
      >
        <Text className="text-red-500 text-lg">End Workout</Text>
      </Pressable>
    </View>
  );
};

export default WorkoutContent;
