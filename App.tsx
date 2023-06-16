import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "./view/WelcomePage";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import Dashboard from "./view/Dashboard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View className="flex flex-1">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HOME"
            component={WelcomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen
            name="Register"
            component={RegisterForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
