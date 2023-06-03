import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-center font-bold text-3xl tracking-tighter">
        HELLO WORLD
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
