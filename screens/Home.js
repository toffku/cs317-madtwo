import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import GlobalStyles from "../GlobalStyles";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

const Home = () => {
  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <Header />
      <HomeContent />
    </SafeAreaView>
  );
};

export default Home;
