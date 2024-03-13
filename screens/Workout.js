import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native";
import GlobalStyles from "../global/GlobalStyles";
import WorkoutStats from "../components/WorkoutStats";
import WorkoutContent from "../components/WorkoutContent";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontComponent from "../components/FontComponent";

const Workout = () => {
  const route = useRoute();
  const item = route.params?.item;
  const [data, setData] = useState([]);
  const [time, setTime] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [workoutEnded, setWorkoutEnded] = useState(false);
  const [finalVolume, setFinalVolume] = useState(0);
  const [finalSets, setFinalSets] = useState(0);
  const [duration, setDuration] = useState("");
  const navigation = useNavigation();
  const [workoutCount, setWorkoutCount] = useState(0);

  const startTimer = () => {
    setTime(true);
    setWorkoutEnded(false);
  };

  const updateData = (data) => {
    setData(data);
  };

  const endWorkout = () => {
    setWorkoutEnded(true);
    setWorkoutCount(workoutCount + 1);
    setTime(false);
    toggleModal();
  };

  const getFinalVolume = (vol) => {
    setFinalVolume(vol);
  };
  const getFinalSets = (sets) => {
    setFinalSets(sets);
  };

  const getDuration = (dur) => {
    setDuration(dur);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <View style={GlobalStyles.darkContainer}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={GlobalStyles.darkContainer}>
          <View className="w-full h-full p-10 items-center justify-between">
            <FontComponent className="text-4xl text-white" bold={true}>
              Workout Stats
            </FontComponent>
            <View className="w-full h-1/2 p-5">
              <FontComponent className="text-white">
                Total Volume: {finalVolume}
              </FontComponent>
              <FontComponent className="text-white">
                Total Sets: {finalSets}
              </FontComponent>
              <FontComponent className="text-white">{duration}</FontComponent>
            </View>
            <Pressable
              onPress={() => {
                toggleModal();
                navigation.navigate("Home", {
                  workouts: workoutCount,
                });
              }}
              className="w-full items-center justify-center p-4 rounded-lg"
              style={GlobalStyles.themeBg}
            >
              <FontComponent className="text-white text-lg">Done</FontComponent>
            </Pressable>
          </View>
        </View>
      </Modal>
      <WorkoutStats
        data={data}
        time={time}
        workoutEnded={workoutEnded}
        getFinalVolume={getFinalVolume}
        getDuration={getDuration}
        getFinalSets={getFinalSets}
      />
      <WorkoutContent
        item={item}
        getData={updateData}
        startTimer={startTimer}
        handleEndWorkout={endWorkout}
      />
    </View>
  );
};

export default Workout;
