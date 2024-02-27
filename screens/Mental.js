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

const Mental = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <View className="flex-1 items-center justify-start p-10">
        <View
          className="w-full h-20 items-center justify-center rounded-lg"
          style={GlobalStyles.bgColor}
        >
          <Text className="text-white">Mental</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Mental;
