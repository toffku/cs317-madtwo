import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../global/GlobalStyles";
import Feather from "react-native-vector-icons/Feather";
import Logo from "../components/Logo";
import FontComponent from "../components/FontComponent";

const Settings = () => {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const settingsArr = [
    {
      key: 1,
      name: "Change Username",
      icon: "user",
      onPressFunction: toggleModal,
    },
    {
      key: 2,
      name: "Notifications",
      icon: "bell",
    },
    {
      key: 3,
      name: "Customise",
      icon: "edit-2",
    },
    {
      key: 4,
      name: "Language",
      icon: "flag",
    },
    {
      key: 5,
      name: "FAQ",
      icon: "message-square",
    },
    {
      key: 6,
      name: "About",
      icon: "info",
    },
    {
      key: 7,
      name: "Feedback",
      icon: "message-circle",
    },
  ];

  const handleChangeUsername = () => {
    navigation.navigate("Home", { newUsername: newUsername });
  };

  return (
    <SafeAreaView style={GlobalStyles.darkContainer}>
      <View className="flex-1 h-full w-full">
        <View className="w-full h-20 items-center justify-center">
          <Logo logoStyle={GlobalStyles.smallLogo} width={24} height={24} />
        </View>
        <Modal visible={modalOpen} transparent={true} animationType="fade">
          <View
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            className="flex-1 items-center justify-center px-5"
          >
            <View
              style={GlobalStyles.bgColor}
              className="w-full rounded-lg p-5"
            >
              <FontComponent className="text-white text-xl" bold={true}>
                Change Username
              </FontComponent>

              <TextInput
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                }}
                placeholder="Enter New Username"
                placeholderTextColor="rgba(255, 255, 255, 0.2)"
                className="w-full p-2 rounded-lg mt-5"
                autoFocus={true}
                onChangeText={(text) => setNewUsername(text)}
                value={newUsername}
              />
              <View className="w-full flex-row mt-5 justify-end">
                <TouchableOpacity className="p-3" onPress={toggleModal}>
                  <FontComponent style={GlobalStyles.themeText}>
                    Cancel
                  </FontComponent>
                </TouchableOpacity>
                <TouchableOpacity
                  className="rounded-lg py-3 px-5 ml-2"
                  style={GlobalStyles.themeBg}
                  onPress={() => {
                    toggleModal();
                    handleChangeUsername();
                  }}
                >
                  <FontComponent className="text-white">Save</FontComponent>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {settingsArr.map(({ name, key, icon, onPressFunction }) => {
          return (
            <TouchableOpacity
              key={key}
              className="w-full h-14 items-center px-10 mt-2 flex-row"
              onPress={onPressFunction}
            >
              <Feather name={icon} size={20} color="white" />
              <FontComponent className="px-4 text-white">{name}</FontComponent>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Settings;
