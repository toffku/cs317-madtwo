import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import FontComponent from "./FontComponent";

const WorkoutPopUp = ({ handleDeleteItem, key }) => {
  return (
    <View className="flex-1 items-end justify-center">
      <Menu>
        <MenuTrigger
          customStyles={{ TriggerTouchableComponent: TouchableOpacity }}
        >
          <Ionicons name="ellipsis-vertical" size={25} color={themeColor} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              borderRadius: 6,
              backgroundColor: "#333",
              width: 100,
            },
          }}
        >
          <MenuOption
            customStyles={{
              optionWrapper: {
                padding: 15,
                alignItems: "center",
              },
            }}
          >
            <FontComponent className="text-white">Details</FontComponent>
          </MenuOption>
          <MenuOption
            customStyles={{
              optionWrapper: {
                padding: 15,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
              },
            }}
            onSelect={() => handleDeleteItem(key)}
          >
            <FontComponent className="text-red-500">Remove</FontComponent>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default WorkoutPopUp;
