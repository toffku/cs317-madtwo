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

const Physical = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Physical Page</Text>
    </View>
  );
};

export default Physical;
