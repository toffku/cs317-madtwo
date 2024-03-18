import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FontComponent from "./FontComponent";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import CircularProgress, {
  ProgressRef,
} from "react-native-circular-progress-indicator";
import { useFonts } from "expo-font";

const WorkoutCounter = ({ workoutCount }) => {
  const [fontsLoaded] = useFonts({
    DMSansRegular: require("../assets/fonts/DMSans_24pt-Regular.ttf"),
    DMSansBold: require("../assets/fonts/DMSans_24pt-Bold.ttf"),
  });
  const [maxValue, setMaxValue] = useState(5);
  const [value, setValue] = useState(0);
  const [showValues, setShowValues] = useState(false);
  const [rank, setRank] = useState(1);

  useEffect(() => {
    if (workoutCount) {
      setValue(value + 1);
    }
  }, [workoutCount]);

  useEffect(() => {
    console.log(value);
    if (value === maxValue) {
      setRank(rank + 1);
      if (value === 5) {
        setMaxValue(10);
        setValue(0);
        return;
      }
      if (value === 10) {
        setMaxValue(25);
        setValue(0);
        return;
      }
      if (value === 25) {
        setMaxValue(50);
        setValue(0);
        return;
      }
      setMaxValue(maxValue + 50);
      setValue(0);
    }
  }, [value]);

  const toggleDisplay = () => {
    setShowValues((prev) => !prev);
  };

  return (
    <View className="rounded-full w-full items-center ">
      <Pressable onPress={toggleDisplay}>
        <FontComponent className="text-white my-3 text-lg" bold={true}>
          {showValues ? `${value} / ${maxValue}` : `Rank ${rank}`}
        </FontComponent>
      </Pressable>
      <CircularProgress
        radius={140}
        value={value}
        key={+maxValue}
        maxValue={maxValue}
        progressValueStyle={{ display: "none" }}
        title={workoutCount ? workoutCount : "0"}
        subtitle={`workout${workoutCount === 1 ? "" : "s"}`}
        subtitleStyle={{ fontFamily: "DMSansBold", fontSize: 20 }}
        titleColor="white"
        titleStyle={{ fontFamily: "DMSansBold", fontSize: 80 }}
        activeStrokeColor={themeColor}
        activeStrokeWidth={30}
        inActiveStrokeWidth={30}
        titleFontSize={30}
        duration={2000}
        inActiveStrokeColor={GlobalStyles.bgColor.backgroundColor}
      />
    </View>
  );
};

export default WorkoutCounter;
