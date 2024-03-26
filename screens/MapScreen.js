import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  Linking,
  SafeAreaView,
} from "react-native";
import { Marker, Callout } from "react-native-maps";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { mapViewDark } from "../constants";
import GlobalStyles from "../global/GlobalStyles";
import FontComponent from "../components/FontComponent";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null); // Ensure this state is defined if you're using it
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    getLocationAsync();
    fetchGyms(); // Fetch gym locations here
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Please grant location permission to use the app."
      );
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);
  };

  const fetchGyms = () => {
    // Simulated array of gym locations for demonstration
    const gymLocations = [
      { latitude: 55.806911, longitude: -4.293141, name: "PureGym Giffnock" },
      {
        latitude: 55.867916,
        longitude: -4.255486,
        name: "PureGym Glasgow Robroyston",
      },
      {
        latitude: 55.854832,
        longitude: -4.240996,
        name: "PureGym Glasgow Bath Street",
      },
    ];
    setGyms(gymLocations);
  };

  const handleDirections = (latitude, longitude) => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${latitude},${longitude}`;
    const label = "Gym Location";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  return (
    <SafeAreaView className="flex-1" style={GlobalStyles.darkContainer}>
      <View className="items-center justify-center px-10 pt-10">
        <FontComponent bold={true} className="text-white text-xl">
          Select a marker on the map
        </FontComponent>
      </View>
      <View className="m-8 rounded-3xl overflow-hidden h-3/4">
        {currentLocation ? (
          <MapView
            className="w-full h-full rounded-xl shadow-lg"
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {/* Render markers for gym locations */}
            {gyms.map((gym, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: gym.latitude,
                  longitude: gym.longitude,
                }}
                title={gym.name}
              >
                {/* Callout for gym marker */}
                <Callout
                  onPress={() => handleDirections(gym.latitude, gym.longitude)}
                >
                  <Text>Get Directions</Text>
                </Callout>
              </Marker>
            ))}
            {/* Marker for user's current location */}
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Your Location"
            />
            {destination && (
              <Marker
                coordinate={{
                  latitude: destination.latitude,
                  longitude: destination.longitude,
                }}
                title="Destination"
              />
            )}
          </MapView>
        ) : (
          <View
            className="w-full h-full items-center justify-center"
            style={GlobalStyles.bgColor}
          >
            <FontComponent style={GlobalStyles.themeText} className="text-xl">
              Please allow location
            </FontComponent>
          </View>
        )}
      </View>
      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigation.goBack()}
      >
        <FontComponent style={GlobalStyles.themeText} className="text-xl">
          Back
        </FontComponent>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MapScreen;
