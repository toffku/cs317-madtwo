import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import GlobalStyles from "../GlobalStyles";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

const Home = () => {
  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <Image
        source={require("../assets/logo-no-text.png")}
        style={styles.logo}
      />
      <Header />
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
