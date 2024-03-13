import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../global/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";
import FontComponent from "../components/FontComponent";

const Login = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emptyUsername, setEmptyUsername] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const pword = "MadTwo";

  const handlePress = () => {
    setWrongPassword(false);
    let usernameError = false;
    let passwordError = false;

    if (username.trim() === "") {
      setEmptyUsername(true);
      usernameError = true;
    } else {
      setEmptyUsername(false);
    }

    if (password === "") {
      setEmptyPassword(true);
      passwordError = true;
    } else {
      setEmptyPassword(false);
    }

    if (usernameError || passwordError) {
      return;
    }

    if (password !== pword) {
      setWrongPassword(true);
      return;
    }

    navigation.navigate("TabNavigation", { username: username });
  };
  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <View className="h-screen w-full items-center justify-center px-10">
        <View
          className="w-full h-[60%] p-8 rounded-2xl items-center justify-around"
          style={GlobalStyles.bgColor}
        >
          <Logo logoStyle={GlobalStyles.largeLogo} width={50} height={50} />
          <View className="w-full mt-8  h-1/3 justify-between">
            <View>
              <TextInput
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                }}
                placeholder="Enter Name"
                placeholderTextColor="rgba(255, 255, 255, 0.2)"
                className={`w-full p-2 rounded-lg ${
                  emptyUsername ? "border border-red-500" : ""
                }`}
                onChangeText={(text) => setUsername(text)} // Update the password state when the text changes
                value={username} // Set the value of the input to the password state
              />
              <Text className="text-red-500 text-[11px] px-2 pt-1 pb-2">
                {emptyUsername ? "Name is required" : ""}
              </Text>
            </View>
            <View>
              <TextInput
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                }}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="rgba(255, 255, 255, 0.2)"
                className={`w-full p-2 rounded-lg ${
                  emptyPassword || wrongPassword ? "border border-red-500" : ""
                }`}
                onChangeText={(text) => setPassword(text)} // Update the password state when the text changes
                value={password} // Set the value of the input to the password state
              />
              <Text className="text-red-500 text-[11px] px-2 pt-1 pb-2">
                {emptyPassword
                  ? "Password is required"
                  : wrongPassword
                  ? "Password is incorrecct"
                  : ""}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={handlePress}
            className="w-full mt-10 p-2 rounded-lg items-center justify-center"
            style={GlobalStyles.themeBg}
          >
            <FontComponent bold={true} className="text-lg text-white">
              Login
            </FontComponent>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
