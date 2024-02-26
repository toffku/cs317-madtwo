import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#222",
    flex: 1,
  },
});
