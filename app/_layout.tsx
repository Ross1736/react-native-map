import { Stack } from "expo-router";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View } from "react-native";
import Menu from "../src/components/Menu";

function StackLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <Menu />

      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
          statusBarStyle: "dark",
          statusBarHidden: false,
          statusBarAnimation: "fade",
          contentStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </View>
  );
}

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StackLayout />
    </SafeAreaProvider>
  );
}
