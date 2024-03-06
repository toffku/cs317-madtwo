import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/MainContainer";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  return <Navigation />;
}
