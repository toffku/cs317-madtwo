import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../global/GlobalStyles";
import Feather from "react-native-vector-icons/Feather";
import Logo from "../components/Logo";
import FontComponent from "../components/FontComponent";

const Settings = () => {
  const navigation = useNavigation();
  const [usernameModalOpen, setUsernameModalOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [showFAQ, setShowFAQ] = useState(false); // State to toggle FAQ display
  const [modalVisible, setModalVisible] = useState(false); // State to toggle modal visibility

  const toggleModal = () => {
    setUsernameModalOpen(!usernameModalOpen);
  };

  const handleAboutPress = () => {
    // Show a welcome message when the user clicks on "About"
    Alert.alert(
      "Welcome to Our Fitness App!",
      "We are excited to have you here. Our app is designed to help you achieve your fitness goals. Stay active and healthy!",
      [
        {
          text: "Got it",
          onPress: () => console.log("Welcome message dismissed"),
        },
      ]
    );
  };

  const handleNotificationsPress = () => {
    Alert.alert("", "Allow notifications?", [
      {
        text: "Yes",
        onPress: () => console.log("Notifications enabled"),
      },
      {
        text: "No",
        onPress: () => console.log("Notifications dismissed"),
      },
    ]);
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
      onPressFunction: handleNotificationsPress,
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
      onPressFunction: () => setShowFAQ(!showFAQ), // Toggle FAQ display
    },
    {
      key: 6,
      name: "About",
      icon: "info",
      onPressFunction: handleAboutPress,
    },
    {
      key: 7,
      name: "Feedback",
      icon: "message-circle",
    },
  ];

  const faqQuestions = [
    {
      question: "How often should I work out?",
      answer:
        "It's recommended to exercise at least 3-4 times a week for optimal results.",
    },
    {
      question: "What's the best time to work out?",
      answer:
        "The best time varies based on individual preferences. Consider morning, afternoon, or evening workouts.",
    },
    {
      question: "Cardio or strength training?",
      answer:
        "Both! Cardio improves heart health, while strength training builds muscle and boosts metabolism.",
    },
    {
      question: "How long should my workouts be?",
      answer:
        "Aim for 30-60 minutes per session, focusing on quality and proper form.",
    },
    {
      question: "How do I prevent muscle soreness after a workout?",
      answer:
        "Stretching: Perform dynamic stretches before your workout and static stretches afterward.",
    },
    {
      question: "How can I stay motivated to exercise regularly?",
      answer:
        "You should set goals on what you want to achieve, make sure to add variety in your workout, and find someone to go with!",
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
        {/* Username Modal */}
        <Modal
          visible={usernameModalOpen}
          transparent={true}
          animationType="fade"
        >
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

        {showFAQ ? (
          <View>
            <FontComponent className="text-white font-bold text-lg mt-4 ml-4">
              Frequently Asked Questions
            </FontComponent>
            {faqQuestions.map(({ question, answer }) => (
              <View key={question} className="mt-2 px-10">
                <FontComponent className="text-white" bold={true}>
                  {question}
                </FontComponent>
                <FontComponent className="text-white">{answer}</FontComponent>
              </View>
            ))}
            <TouchableOpacity
              className="mt-4 ml-4"
              onPress={() => setShowFAQ(false)} // Back arrow to hide FAQ
            >
              <Feather name="arrow-left" size={20} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {settingsArr.map(({ name, key, icon, onPressFunction }) => {
              return (
                <TouchableOpacity
                  key={key}
                  className="w-full h-14 items-center px-10 mt-2 flex-row"
                  onPress={onPressFunction}
                >
                  <Feather name={icon} size={20} color="white" />
                  <FontComponent className="px-4 text-white">
                    {name}
                  </FontComponent>
                </TouchableOpacity>
              );
            })}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Settings;
