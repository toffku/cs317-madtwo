import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Physical from "./screens/Physical";
import Mental from "./screens/Mental";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Physical" component={Physical} />
        <Stack.Screen name="Mental" component={Mental} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
