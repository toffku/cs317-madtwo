import React, { useEffect, useState } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import Icon from "react-native-vector-icons/AntDesign";
import Logo from "./Logo";
import FontComponent from "./FontComponent";
import WorkoutCounter from "./WorkoutCounter";
import Bronze from "./svgs/Bronze";
import Silver from "./svgs/Silver";
import Gold from "./svgs/Gold";
import Iridescent from "./svgs/Iridescent";
import Crismon from "./svgs/Crimson";

const Header = ({ workoutCount, name, newUsername }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(name);
  }, [name]);

  useEffect(() => {
    if (newUsername) {
      setUsername(newUsername);
    }
  }, [newUsername]);
  return (
    <View className="flex-1 mb-36">
      {/* Logo */}
      <View className="w-full h-20 items-center justify-center">
        <Logo logoStyle={GlobalStyles.smallLogo} width={24} height={24} />
      </View>
      {/* Header Section */}
      <View className="w-full h-3/5 items-center px-8">
        <View className="items-center w-full flex-row justify-between">
          <View>
            <FontComponent className="text-[12px] text-gray-100">
              Welcome back,
            </FontComponent>
            <FontComponent
              className="text-xl"
              bold={true}
              style={GlobalStyles.themeText}
            >
              {username}
            </FontComponent>
          </View>
          <View>
            {/* <Image
              source={require("../assets/images/iridescent.png")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
              }}
            />
            <Image
              source={require("../assets/images/master.png")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
              }}
            />
            <Bronze width={40} height={40} /> */}
          </View>
        </View>
        <WorkoutCounter workoutCount={workoutCount} />
      </View>
    </View>
  );
};

export default Header;
