import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  darkContainer: {
    backgroundColor: "#111",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  bgColor: {
    backgroundColor: "#222",
  },
});
