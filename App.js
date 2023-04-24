import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from "react";
import 'react-native-gesture-handler';
import ContactManageScreen from "./src/screens/contact/index";
import HomeScreen from "./src/screens/home/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ContactManageScreen" component={ContactManageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
