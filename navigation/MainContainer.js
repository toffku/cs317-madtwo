import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Workout from "../screens/Workout";
import Settings from "../screens/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Mental from "../screens/Mental";
import Physical from "../screens/Physical";
import Exercises from "../screens/Exercises";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Mental" component={Mental} />
      <Stack.Screen name="Physical" component={Physical} />
      <Stack.Screen name="Exercises" component={Exercises} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
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
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
