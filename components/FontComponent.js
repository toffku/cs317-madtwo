import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const FontComponent = ({ className, style, bold, children }) => {
  const [fontsLoaded] = useFonts({
    DMSansRegular: require("../assets/fonts/DMSans_24pt-Regular.ttf"),
    DMSansBold: require("../assets/fonts/DMSans_24pt-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text style={style}>{children}</Text>;
  }
  return (
    <Text
      style={[
        { fontFamily: bold ? "DMSansBold" : "DMSansRegular" },
        style,
        className,
      ]}
    >
      {children}
    </Text>
  );
};

export default FontComponent;
