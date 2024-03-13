import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../global/GlobalStyles";
import DeleteIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontComponent from "./FontComponent";

const Set = ({
  index,
  handleDelete,
  handleVolumeChange,
  handleSetChecked,
  set,
}) => {
  const [isChecked, setIsChecked] = useState(set.isChecked);
  const [volume, setVolume] = useState(set.volume);
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  useEffect(() => {
    if (handleVolumeChange) {
      const weightNum = parseFloat(weight);
      const repsNum = parseInt(reps);
      const newVolume =
        isNaN(weightNum) || isNaN(repsNum) ? 0 : weightNum * repsNum;
      setVolume(newVolume);
      handleVolumeChange(index, newVolume);
    }
  }, [weight, reps]);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    handleSetChecked(index, newCheckedState);
  };

  const handleWeightInputChange = (text) => {
    setWeight(text);
  };

  const handleRepInputChange = (text) => {
    setReps(text);
  };

  return (
    <TouchableOpacity
      className="w-full px-6 py-3 mb-3 rounded-lg flex-row justify-between items-center"
      style={isChecked ? GlobalStyles.checked : GlobalStyles.bgColor}
      onPress={handleCheckboxChange}
    >
      <FontComponent bold={true} className="text-white text-lg font-semibold">
        {index + 1}
      </FontComponent>
      <View
        className="px-3 py-2 justify-center items-center rounded-lg"
        style={{ backgroundColor: GlobalStyles.darkContainer.backgroundColor }}
      >
        <TextInput
          className="text-lg font-semibold text-center"
          style={GlobalStyles.themeText}
          keyboardType="numeric"
          maxLength={3}
          onChangeText={handleWeightInputChange}
        />
      </View>
      <View
        className=" px-3 py-2 justify-center items-center rounded-lg placeholder:justify-center"
        style={{ backgroundColor: GlobalStyles.darkContainer.backgroundColor }}
      >
        <TextInput
          className="text-lg font-semibold text-center"
          keyboardType="numeric"
          maxLength={2}
          style={GlobalStyles.themeText}
          onChangeText={handleRepInputChange}
        />
      </View>
      <Pressable
        onPress={() => handleDelete(index)}
        className="w-6 h-10 items-center justify-center"
      >
        <DeleteIcon name="delete" size={25} color="red" />
      </Pressable>
    </TouchableOpacity>
  );
};

export default Set;
