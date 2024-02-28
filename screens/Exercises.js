import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const Exercises = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     fetch("")
  //       .then((res) => res.json())
  //       .then(
  //         (result) => {
  //           setIsLoading(false);
  //           setResponse(result);
  //         },
  //         (err) => {
  //           setIsLoading(false);
  //           setError(err);
  //         }
  //       );
  //   }, []);

  if (isLoading) {
    return (
      <SafeAreaView
        style={GlobalStyles.darkContainer}
        className="justify-center items-center"
      >
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  } else if (error) {
    return <Text>{error}</Text>;
  } else {
    return (
      <SafeAreaView style={GlobalStyles.darkContainer}>
        <View className="flex-1 items-center justify-start p-10">
          <TouchableOpacity
            className="w-full h-14 items-center px-10 mt-2 flex-row"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#333",
            }}
          >
            <Text className="px-4 text-white">Incline Bench</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

export default Exercises;
