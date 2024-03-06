import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../global/GlobalStyles";
import DeleteIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontComponent from "./FontComponent";

const Set = ({ index, handleDelete, handleVolume, handleSets }) => {
  const [checked, setChecked] = useState(false);
  const [volumeChange, setVolumeChange] = useState();
  const [setChange, setSetChange] = useState();

  const handleChecked = () => {
    setChecked(!checked);
    const volume = volumeChange ? Number(volumeChange) : 0;
    const sets = setChange ? Number(setChange) : 0;
    handleSets(sets);
    handleVolume(volume);
  };

  const handleVolumeChange = (text) => {
    setVolumeChange(text);
  };
  const handleSetChange = (text) => {
    setSetChange(text);
  };

  return (
    <TouchableOpacity
      className="w-full px-6 py-3 mb-3 rounded-lg flex-row justify-between items-center"
      style={checked ? GlobalStyles.checked : GlobalStyles.bgColor}
      onPress={handleChecked}
    >
      <FontComponent bold={true} className="text-white text-lg font-semibold">
        {index + 1}
      </FontComponent>
      <View className="bg-black px-3 py-2 justify-center items-center rounded-lg">
        <TextInput
          className="text-lg font-semibold text-center"
          style={GlobalStyles.themeText}
          keyboardType="numeric"
          maxLength={3}
          onChangeText={handleVolumeChange}
        />
      </View>
      <View className="bg-black px-3 py-2 justify-center items-center rounded-lg placeholder:justify-center">
        <TextInput
          className="text-lg font-semibold text-center"
          keyboardType="numeric"
          maxLength={2}
          onChangeText={handleSetChange}
          style={GlobalStyles.themeText}
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
