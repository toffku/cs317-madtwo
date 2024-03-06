import { Platform, StyleSheet } from "react-native";

export const themeColor = "#cd35ab";

export default StyleSheet.create({
  darkContainer: {
    backgroundColor: "#111",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  bgColor: {
    backgroundColor: "#222",
  },
  checked: {
    backgroundColor: "#4BA94C",
  },
  themeText: {
    color: themeColor,
  },
  themeBg: {
    backgroundColor: themeColor,
  },
  largeLogo: {
    height: 62,
    width: 62,
    fontSize: 48,
  },
  smallLogo: {
    height: 32,
    width: 32,
    fontSize: 24,
  },
});
