import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import { Accelerometer } from "expo-sensors";
import FontComponent from "../components/FontComponent";
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Path, Svg } from "react-native-svg";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const AccelerometerScreen = () => {
  const navigation = useNavigation();
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
  const [showFlat, setShowFlat] = useState(false);

  const toggleFlat = () => {
    setShowFlat((prev) => !prev);
  };

  const animation = useSharedValue(0);
  const yAnimation = useSharedValue(0);

  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (x > 0.5) {
      animation.value = -100;
    } else if (x < -0.5) {
      animation.value = 100;
    } else {
      animation.value = 0;
    }
  }, [x]);

  useEffect(() => {
    if (y > 0.4) {
      yAnimation.value = 300;
    } else if (y < -0.4) {
      yAnimation.value = -300;
    } else {
      yAnimation.value = 0;
    }
  }, [y]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 1000,
            easing: Easing.bounce,
          }),
        },
        {
          translateY: withTiming(yAnimation.value, {
            duration: 1000,
            easing: Easing.bounce,
          }),
        },
      ],
    };
  });

  return (
    <SafeAreaView
      style={GlobalStyles.darkContainer}
      className="items-center justify-center"
    >
      <View className="absolute top-40 items-center justify-between h-28">
        <FontComponent bold={true} className="text-white text-3xl">
          Tilt your phone!
        </FontComponent>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicon name="exit-outline" size={30} color={themeColor} />
        </TouchableOpacity>
      </View>
      <Pressable onPress={toggleFlat}>
        <Animated.View
          className="h-36 w-36 items-center justify-center rounded-full"
          style={[GlobalStyles.themeBg, animatedStyle]}
        >
          {showFlat ? (
            <FontComponent bold={true} className="text-white text-xl">
              {z > 1 ? "Flat" : "Not Flat"}
            </FontComponent>
          ) : (
            <Svg width={100} height={100} viewBox="0 0 24 24" fill="#111">
              <Path
                d="M17.1797 5.25C15.4697 5.25 13.4297 5.9 13.4297 9V15C13.4297 18.1 15.4697 18.75 17.1797 18.75C18.8897 18.75 20.9297 18.1 20.9297 15V9C20.9297 5.9 18.8897 5.25 17.1797 5.25Z"
                fill="#111"
              />
              <Path
                d="M6.82031 5.25C5.11031 5.25 3.07031 5.9 3.07031 9V15C3.07031 18.1 5.11031 18.75 6.82031 18.75C8.53031 18.75 10.5703 18.1 10.5703 15V9C10.5703 5.9 8.53031 5.25 6.82031 5.25Z"
                fill="#111"
              />
              <Path
                d="M13.4303 11.25H10.5703V12.75H13.4303V11.25Z"
                fill="#111"
              />
              <Path
                d="M22.5 15.25C22.09 15.25 21.75 14.91 21.75 14.5V9.5C21.75 9.09 22.09 8.75 22.5 8.75C22.91 8.75 23.25 9.09 23.25 9.5V14.5C23.25 14.91 22.91 15.25 22.5 15.25Z"
                fill="#111"
              />
              <Path
                d="M1.5 15.25C1.09 15.25 0.75 14.91 0.75 14.5V9.5C0.75 9.09 1.09 8.75 1.5 8.75C1.91 8.75 2.25 9.09 2.25 9.5V14.5C2.25 14.91 1.91 15.25 1.5 15.25Z"
                fill="#111"
              />
            </Svg>
          )}
        </Animated.View>
      </Pressable>
    </SafeAreaView>
  );
};

export default AccelerometerScreen;
