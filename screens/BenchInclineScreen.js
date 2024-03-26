import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../global/GlobalStyles";
import { Accelerometer } from "expo-sensors";
import FontComponent from "../components/FontComponent";

const BenchIncline = () => {
  const navigation = useNavigation();
  const [betaAngle, setBetaAngle] = useState(0);

  useEffect(() => {
    // Set the update interval for accelerometer data
    Accelerometer.setUpdateInterval(1000); // 1000 milliseconds = 1 second

    const subscription = Accelerometer.addListener((accelerometerData) => {
      const { y } = accelerometerData;
      // Here we're directly setting y value to represent the beta angle.
      // Adjust this logic based on how you wish to calculate the beta angle.
      setBetaAngle(y.toFixed(2) * 100 * -1);
    });

    return () => {
      // Unsubscribe to the accelerometer data when the component unmounts
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <View className="flex-1 p-5">
        <View className="flex-2 mt-10 py-32 items-center ">
          <FontComponent bold={true} className="text-white text-xl">
            Place your phone on the bench!
          </FontComponent>
        </View>
        <View className="flex-1 items-center justify-between">
          <FontComponent
            bold={true}
            className="text-8xl pt-5"
            style={GlobalStyles.themeText}
          >
            {betaAngle.toString.length > 3 ? "" : betaAngle}°
          </FontComponent>
          <TouchableOpacity
            style={GlobalStyles.bgColor}
            className="w-full rounded-lg items-center justify-center p-5"
            onPress={() => navigation.goBack()}
          >
            <FontComponent style={GlobalStyles.themeText} className="text-xl">
              Leave
            </FontComponent>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BenchIncline;
