import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../global/GlobalStyles";
import Searchbar from "../components/Searchbar";
import ExerciseList from "../components/ExerciseList";

const Exercises = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [showExerciseList, setShowExerciseList] = useState(false);

  const fetchData = useCallback(async () => {
    if (!input) {
      // * If input is empty, return early without making API calls
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      // ? Make two separate requests
      const response1 = await fetch(
        `https://api.api-ninjas.com/v1/exercises?type=strength&muscle=${input}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "kKeJTql0nLZJnKLAnQbraA==KtKjxN3vV4EDxTVp",
          },
        }
      );
      const response2 = await fetch(
        `https://api.api-ninjas.com/v1/exercises?type=strength&name=${input}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "kKeJTql0nLZJnKLAnQbraA==KtKjxN3vV4EDxTVp",
          },
        }
      );

      // Check if both responses are ok
      if (!response1.ok || !response2.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse response data
      const jsonData1 = await response1.json();
      const jsonData2 = await response2.json();

      // Combine data from both responses
      const combinedData = [...jsonData1, ...jsonData2];

      // Set combined data to state
      setData(combinedData);
      setIsLoading(false);
      setShowExerciseList(false);
      setShowExerciseList(true);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [input]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [fetchData, input]);

  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <View className="w-full h-20 justify-center items-center ">
        <Text className="text-white font-semibold text-2xl">
          Choose an exercise
        </Text>
      </View>
      <View className="px-4">
        <Searchbar input={input} setInput={setInput} />
      </View>
      {isLoading ? (
        <SafeAreaView
          className="justify-center items-center"
          style={GlobalStyles.darkContainer}
        >
          <ActivityIndicator size="large" color="#ffffff" />
        </SafeAreaView>
      ) : error ? (
        <SafeAreaView
          className=" justify-center items-center"
          style={GlobalStyles.darkContainer}
        >
          <Text className="text-white">{error.message}</Text>
        </SafeAreaView>
      ) : input === "" ? (
        <View className="flex-1 p-4 justify-start items-center">
          <Text className="text-white text-lg font-semibold mt-8">
            Type in the search bar to find an exercise
          </Text>
          <Text className="text-sm text-white opacity-50">
            Search for muscles groups, exercises, equipment etc.{" "}
          </Text>
        </View>
      ) : (
        showExerciseList && (
          <View className="flex-1 p-4">
            <ExerciseList data={data} input={input} />
          </View>
        )
      )}
    </SafeAreaView>
  );
};

export default Exercises;
