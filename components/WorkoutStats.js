import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../global/GlobalStyles";
import FontComponent from "./FontComponent";

const WorkoutStats = ({
  data,
  time,
  workoutEnded,
  getFinalSets,
  getFinalVolume,
  getDuration,
}) => {
  const [volume, setVolume] = useState(0);
  const [sets, setSets] = useState(0);
  const [timer, setTimer] = useState(0);
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    let tempVol = 0;
    let tempSets = 0;
    for (let i = 0; i < data.length; i++) {
      tempVol += data[i].volume;
      tempSets += data[i].sets;
    }
    setVolume(tempVol);
    setSets(tempSets);
  }, [data]);

  useEffect(() => {
    let interval;

    if (time) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (workoutEnded) {
      getFinalVolume(volume);
      getFinalSets(sets);
      getDuration(formatTime(timer));
      setVolume(0);
      setSets(0);
      setTimer(0);
    }
  }, [workoutEnded]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  return (
    <View
      className="w-full flex-row h-20 p-5 justify-between items-center"
      style={styles.borderStyles}
    >
      <View className="w-[30%] h-full">
        <FontComponent className="   text-xs" style={GlobalStyles.themeText}>
          Duration
        </FontComponent>
        <FontComponent className=" text-gray-100 text-lg pt-1">
          {formatTime(timer)}
        </FontComponent>
      </View>
      <View className="w-[30%]  h-full">
        <FontComponent className="   text-xs" style={GlobalStyles.themeText}>
          Volume
        </FontComponent>
        <FontComponent className=" text-gray-100 text-lg pt-1">
          {volume}
        </FontComponent>
      </View>
      <View className="w-[30%]  h-full">
        <FontComponent className="  text-xs" style={GlobalStyles.themeText}>
          Sets
        </FontComponent>
        <FontComponent className=" text-gray-100  text-lg pt-1">
          {sets}
        </FontComponent>
      </View>
    </View>
  );
};

export default WorkoutStats;

const styles = StyleSheet.create({
  borderStyles: {
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
});
