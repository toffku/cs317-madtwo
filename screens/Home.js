import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import GlobalStyles from "../global/GlobalStyles";

const Home = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View className="border">
        <Text className="text-gray-50">Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
