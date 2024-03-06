import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StyleSheet } from "react-native";
import GlobalStyles from "../global/GlobalStyles";
import WorkoutStats from "../components/WorkoutStats";
import WorkoutContent from "../components/WorkoutContent";
import { useRoute } from "@react-navigation/native";

const Workout = () => {
  const route = useRoute();
  const item = route.params?.item;
  const [volume, setVolume] = useState(0);
  const [numberOfSets, setNumberOfSets] = useState(0);
  const handleSets = (text) => {
    setNumberOfSets(Number(text));
  };

  const handleVolume = (text) => {
    setVolume(Number(text));
  };
  return (
    <View style={GlobalStyles.darkContainer}>
      <WorkoutStats volume={volume} sets={numberOfSets} />
      <WorkoutContent
        item={item}
        handleSets={handleSets}
        handleVolume={handleVolume}
      />
    </View>
  );
};

export default Workout;
