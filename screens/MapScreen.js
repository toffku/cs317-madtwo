import { View, Text } from "react-native";
import React from "react";
import { mapViewDark } from "../constants";
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <View className="w-screen h-screen">
      <MapView
        className="w-full h-full rounded-xl shadow-lg"
        customMapStyle={mapViewDark}
      />
    </View>
  );
};

export default MapScreen;
