import React from "react";
import GlobalStyles from "../global/GlobalStyles";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import { useRoute } from "@react-navigation/native";

const Home = () => {
  const route = useRoute();
  const workoutCount = route.params?.workouts;
  const name = route.params?.username;
  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <Header workoutCount={workoutCount} name={name} />
      <HomeContent />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 180,
    opacity: 0.9,
    position: "absolute",
    right: -30,
    top: 240,
    transform: [{ rotate: "-20deg" }],
  },
});
