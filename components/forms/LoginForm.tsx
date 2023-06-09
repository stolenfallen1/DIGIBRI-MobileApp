import React from "react";
import { Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type WelcomePageNavigationProp = StackNavigationProp<{ Register: undefined }>;
type DashboardNavigationProp = StackNavigationProp<{ Dashboard: undefined }>;

const LoginForm = () => {
  const WelcomePageNavigationProp = useNavigation<WelcomePageNavigationProp>();
  const DashboardNavigationProp = useNavigation<DashboardNavigationProp>();

  const handleRegister = (): void => {
    // Navigate to the Login screen
    WelcomePageNavigationProp.navigate("Register");
  };

  const handleDashboard = (): void => {
    // Navigate to the Login screen
    DashboardNavigationProp.navigate("Dashboard");
  };

  return (
    <View className="flex items-center justify-center h-full">
      <View className="mb-4">
        <Text className="font-bold text-2xl tracking-tight">Username:</Text>
        <TextInput
          className="border-2 border-gray-500 rounded px-3 py-2"
          placeholder="Username"
          style={{ width: 200 }}
        />
      </View>
      <View className="mb-4">
        <Text className="font-bold text-2xl tracking-tight">Password:</Text>
        <TextInput
          className="border-2 border-gray-500 rounded px-3 py-2"
          placeholder="Password"
          style={{ width: 200 }}
        />
      </View>
      <Pressable
        onPress={handleDashboard}
        className="bg-blue-500 p-2 rounded-lg mb-3"
        style={{ width: 100 }}
      >
        <Text className="text-black text-lg font-bold text-center">Login</Text>
      </Pressable>
      <Pressable onPress={handleRegister}>
        <Text className="text-black text-lg italic">
          No account yet? Register here
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
