import React, { useState } from "react";
import {
  DarkTheme,
  NavigationContainer,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Workout from "../screens/Workout";
import Settings from "../screens/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Exercises from "../screens/Exercises";
import MapScreen from "../screens/MapScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles, { themeColor } from "../global/GlobalStyles";
import Tools from "../screens/Tools";
import AccelerometerScreen from "../screens/AccelerometerScreen";
import BenchIncline from "../screens/BenchInclineScreen";

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
      <Stack.Screen name="Tools" component={Tools} />
      <Stack.Screen name="Accelerometer" component={AccelerometerScreen} />
      <Stack.Screen name="BenchIncline" component={BenchIncline} />
      <Stack.Screen name="Exercises" component={Exercises} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  const route = useRoute();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: GlobalStyles.darkContainer.backgroundColor,
      }}
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
        tabBarActiveTintColor: themeColor,
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
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ username: route.params.username }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <MainStack />
    </NavigationContainer>
  );
}
