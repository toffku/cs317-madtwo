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
  let pword = "MadTwo";
  let uname = "JFM04";

  const handlePress = () => {
    if (password === pword && username.trim() === uname) {
      navigation.navigate("TabNavigation");
    }
  };
  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <View className="h-screen w-full items-center justify-center px-10">
        <View
          className="w-full h-1/2 p-8 rounded-lg items-center justify-around"
          style={GlobalStyles.bgColor}
        >
          <Logo logoStyle={GlobalStyles.largeLogo} width={50} height={50} />
          <View className="w-full mt-8">
            <TextInput
              style={{
                backgroundColor: "#111",
                color: "#fff",
              }}
              placeholder="Username"
              placeholderTextColor="rgba(255, 255, 255, 0.2)"
              className="w-full p-2 rounded-lg mb-2"
              onChangeText={(text) => setUsername(text)} // Update the password state when the text changes
              value={username} // Set the value of the input to the password state
            />
            <TextInput
              style={{
                backgroundColor: "#111",
                color: "#fff",
              }}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.2)"
              className="w-full p-2 rounded-lg"
              onChangeText={(text) => setPassword(text)} // Update the password state when the text changes
              value={password} // Set the value of the input to the password state
            />
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
