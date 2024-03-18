import React, { useState } from "react";
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
import NewDivisionModal from "../components/NewDivisionModal";

const Home = () => {
  const route = useRoute();
  const workoutCount = route.params?.workouts;
  const name = route.params?.username;
  const newUsername = route.params?.newUsername;
  const [openModal, setOpenModal] = useState(true);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <NewDivisionModal toggle={toggleModal} openModal={openModal} />
      <Header
        workoutCount={workoutCount}
        name={name}
        newUsername={newUsername}
      />
      <HomeContent />
    </SafeAreaView>
  );
};

export default Home;
