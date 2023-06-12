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
      <Text className="font-bold text-5xl tracking-tighter">DIGIBRI</Text>
      <Text className="py-5 italic text-xl tracking-tight">
        E-Library For Lahug Night High School
      </Text>
      {/* Your welcome page content */}
      <Pressable onPress={handleLogin} className="bg-blue-500 p-4 rounded-lg">
        <Text className="text-black text-lg font-bold">Login</Text>
      </Pressable>
    </View>
  );
};

export default WelcomePage;
