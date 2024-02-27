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
import GlobalStyles from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <SafeAreaView style={GlobalStyles.darkContainer}>
        <View className="h-screen w-full items-center justify-center p-10">
          <View className="w-full">
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 300, height: 180, resizeMode: "contain" }}
            />
          </View>

          <Pressable
            onPress={handlePress}
            className="w-full rounded-lg p-3 justify-center items-center"
            style={GlobalStyles.bgColor}
          >
            <Text className="text-white font-bold text-lg">Login</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Welcome;
