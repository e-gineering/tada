import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Birthdays } from "./screens/birthdays";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Birthdays />
        <StatusBar backgroundColor="#448aff" barStyle="light-content" />
      </View>
    </SafeAreaView>
  );
}
