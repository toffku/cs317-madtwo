import React from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";
import GlobalStyles from "../global/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import FontComponent from "./FontComponent";

const ExerciseList = ({ input, data }) => {
  const navigation = useNavigation();
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
            onPress={() =>
              navigation.navigate("TabNavigation", {
                screen: "Workout",
                params: { item: item },
              })
            }
          >
            <FontComponent className="text-white text-xl" bold={true}>
              {item.name}
            </FontComponent>
            <FontComponent
              className={`mt-1 ${difficultyColorClass}`}
              bold={true}
            >
              {level}
            </FontComponent>
            <FontComponent className="text-white opacity-50 my-2">
              {item.muscle.replace(/_/g, " ")}
            </FontComponent>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ExerciseList;
