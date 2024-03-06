import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../global/GlobalStyles";
import Logo from "../components/Logo";
import FontComponent from "../components/FontComponent";

const Welcome = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <SafeAreaView style={GlobalStyles.darkContainer}>
        <View className="h-screen w-full items-center justify-between p-10">
          <View className="w-full h-[80%] my-10 items-center justify-center ">
            <Logo logoStyle={GlobalStyles.largeLogo} width={50} height={50} />
          </View>

          <Pressable
            onPress={handlePress}
            className="w-full rounded-lg p-3 justify-center items-center"
            style={GlobalStyles.bgColor}
          >
            <FontComponent className="text-white text-lg" bold={true}>
              Login
            </FontComponent>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Welcome;
