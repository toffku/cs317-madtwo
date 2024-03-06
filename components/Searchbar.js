import { View, Text, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";

const Searchbar = ({ input, setInput }) => {
  const handleInputChange = (text) => {
    setInput(text);
  };
  return (
    <View
      className="flex-row items-center p-4 rounded-full "
      style={GlobalStyles.bgColor}
    >
      <Icon name="search1" color={themeColor} size={20} />
      <TextInput
        placeholder="Search exercise"
        placeholderTextColor="rgba(255,255,255, 0.5)"
        style={{
          color: "white",
        }}
        className="px-4 w-full"
        onChangeText={handleInputChange}
      />
    </View>
  );
};

export default Searchbar;
