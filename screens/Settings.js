import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import Feather from "react-native-vector-icons/Feather";

const Settings = () => {
  const navigation = useNavigation();
  const settingsArr = [
    {
      key: 1,
      name: "Change Username",
      icon: "user",
    },
    {
      key: 2,
      name: "Notifications",
      icon: "bell",
    },
    {
      key: 3,
      name: "Units",
      icon: "edit-2",
    },
    {
      key: 4,
      name: "Language",
      icon: "flag",
    },
    {
      key: 5,
      name: "FAQ",
      icon: "message-square",
    },
    {
      key: 6,
      name: "About",
      icon: "info",
    },
    {
      key: 7,
      name: "Feedback",
      icon: "message-circle",
    },
  ];

  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <View className="flex-1 h-full w-full mt-20">
        {settingsArr.map(({ name, key, icon }) => {
          return (
            <TouchableOpacity
              key={key}
              className="w-full h-14 items-center px-10 mt-2 flex-row"
            >
              <Feather name={icon} size={20} color="white" />
              <Text className="px-4 text-white">{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Settings;
