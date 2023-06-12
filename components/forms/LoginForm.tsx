import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const LoginForm = () => {
  return (
    <View>
      <Text>Login</Text>
      <View>
        <Text>Username:</Text>
        <TextInput placeholder="Username" style={{ width: 200 }} />
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput placeholder="Password" style={{ width: 200 }} />
      </View>
    </View>
  );
};

export default LoginForm;
