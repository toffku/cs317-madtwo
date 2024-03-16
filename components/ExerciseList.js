import React from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";
import GlobalStyles from "../global/GlobalStyles";

const ExerciseList = ({ input, data }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => {
        let difficultyColorClass;
        let level;
        switch (item.difficulty) {
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
          <TouchableOpacity
            className="p-5 justify-center rounded-lg mb-4 flex-1"
            style={GlobalStyles.bgColor}
          >
            <Text className="text-white text-xl font-bold">{item.name}</Text>
            <Text className={`font-semibold mt-1 ${difficultyColorClass}`}>
              {level}
            </Text>
            <Text className="text-white opacity-50 my-2">
              {item.muscle.replace(/_/g, " ")}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ExerciseList;
