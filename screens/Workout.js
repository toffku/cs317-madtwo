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
import CircularProgress from "react-native-circular-progress-indicator";
import { useFonts } from "expo-font";

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
  const [fontsLoaded] = useFonts({
    DMSansRegular: require("../assets/fonts/DMSans_24pt-Regular.ttf"),
    DMSansBold: require("../assets/fonts/DMSans_24pt-Bold.ttf"),
  });

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
      <Modal visible={modalOpen} animationType="slide" statusBarTranslucent>
        <View style={GlobalStyles.darkContainer}>
          <View className="w-full h-full p-5 items-center justify-between">
            <FontComponent className="text-3xl text-white" bold={true}>
              Workout Completed!
            </FontComponent>
            <View className="w-full flex-1 py-10 px-5 items-center justify-between">
              <CircularProgress
                initialValue={0}
                value={workoutCount}
                progressValueColor="white"
                activeStrokeColor="#111"
                inActiveStrokeColor="#111"
                duration={1000}
                radius={200}
                title="workouts completed"
                titleColor="white"
                titleStyle={{ fontFamily: "DMSansBold", fontSize: 20 }}
              />
              <View>
                <FontComponent
                  bold={true}
                  className="text-2xl text-center"
                  style={GlobalStyles.themeText}
                >
                  Workout Stats
                </FontComponent>
                <View className="w-full justify-evenly flex-row mt-2">
                  <View className=" flex-1   justify-center items-center">
                    <FontComponent className="text-white" bold={true}>
                      Volume
                    </FontComponent>
                    <FontComponent className="text-white text-2xl" bold={true}>
                      {finalVolume}kg
                    </FontComponent>
                  </View>
                  <View className="flex-1   justify-center items-center">
                    <FontComponent className="text-white" bold={true}>
                      Sets
                    </FontComponent>
                    <FontComponent className="text-white text-2xl" bold={true}>
                      {finalSets}
                    </FontComponent>
                  </View>
                  <View className="flex-1 justify-center items-center">
                    <FontComponent className="text-white" bold={true}>
                      Duration
                    </FontComponent>
                    <FontComponent className="text-white text-2xl" bold={true}>
                      {duration}
                    </FontComponent>
                  </View>
                </View>
              </View>
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
