import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform, Linking } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps-osmdroid";
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../global/GlobalStyles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeContent = () => {
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
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Please grant location permission to use the app.');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);
  };

  const fetchGyms = () => {
    // Simulated array of gym locations for demonstration
    const gymLocations = [
      { latitude: 55.806911, longitude: -4.293141, name: "PureGym Giffnock" },
      { latitude: 55.867916, longitude: -4.255486, name: "PureGym Glasgow Robroyston" },
      { latitude: 55.854832, longitude: -4.240996, name: "PureGym Glasgow Bath Street" },
    ];
    setGyms(gymLocations);
  };

  const handleDirections = (latitude, longitude) => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
    const latLng = `${latitude},${longitude}`;
    const label = "Gym Location";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url).catch(err => console.error("An error occurred", err));
  };

  // Define handlePhysical function
  const handlePhysical = () => {
    navigation.navigate("Physical");
  };

  // Define handleMental function
  const handleMental = () => {
    navigation.navigate("Mental");
  };

return (
    <View className="flex-1 px-5">
      {/* Map */}
      <View
        className="w-full h-1/2 rounded-lg mb-4 overflow-hidden"
        style={GlobalStyles.bgColor}
      >
        {currentLocation && (
          <MapView
            className="w-full h-full rounded-xl shadow-lg"
            //customMapStyle={mapViewDark}
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
                <Callout onPress={() => handleDirections(gym.latitude, gym.longitude)}>
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
        )}
      </View>
      {/* Sections */}
      <View className="w-full flex-row h-32 justify-between">
        <TouchableOpacity
          className="w-[48%] h-full rounded-lg items-center justify-center"
          style={GlobalStyles.bgColor}
          onPress={handlePhysical}
        >
          <FontAwesome name="heartbeat" color="gold" size={60} />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-[48%] h-full rounded-lg items-center justify-center"
          style={GlobalStyles.bgColor}
          onPress={handleMental}
        >
          <MaterialCommunityIcons name="meditation" color="gold" size={60} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeContent;

