import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Workout from "../screens/Workout";
import Settings from "../screens/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            let rn = route.name;

            switch (rn) {
              case "Home":
                icon = focused ? "home" : "home-outline";
                break;
              case "Workout":
                icon = focused ? "barbell" : "barbell-outline";
                break;
              case "Settings":
                icon = focused ? "settings" : "settings-outline";
                break;
              default:
                break;
            }
            return <Ionicons name={icon} size={size} color={color} />;
          },
          tabBarActiveTintColor: "gold",
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarStyle: {
            height: 60,
            backgroundColor: "#222",
            paddingBottom: 8,
            borderColor: "#222",
            borderTopWidth: 10,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Workout" component={Workout} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
