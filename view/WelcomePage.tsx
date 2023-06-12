import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type WelcomePageNavigationProp = StackNavigationProp<{ Login: undefined }>;

const WelcomePage = () => {
  const navigation = useNavigation<WelcomePageNavigationProp>();

  const handleLogin = (): void => {
    // Navigate to the Login screen
    navigation.navigate("Login");
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text>HELLO WORLD</Text>
      {/* Your welcome page content */}
      <Pressable onPress={handleLogin} className="bg-blue-500 p-4 rounded">
        <Text className="text-black text-lg font-bold">Login</Text>
      </Pressable>
    </View>
  );
};

export default WelcomePage;
