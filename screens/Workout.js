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
import WorkoutStats from "../components/WorkoutStats";
import WorkoutContent from "../components/WorkoutContent";

const Workout = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.darkContainer}>
      <WorkoutStats />
      <WorkoutContent />
    </View>
  );
};

export default Workout;
