import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/MainContainer";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { MenuProvider } from "react-native-popup-menu";

export default function App() {
  return (
    <MenuProvider>
      <View style={{ flex: 1, backgroundColor: "#111" }}>
        <Navigation />
      </View>
    </MenuProvider>
  );
}
