import { useCallback } from "react";
import { StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthProvider } from "../src/providers/auth-provider";
import { COLORS, SPACING } from "../src/utils/styles";

SplashScreen.preventAutoHideAsync();

export default function MainLayout() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="light" />
        <Slot />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.base,
    backgroundColor: COLORS.neutral[950],
    flex: 1,
  },
});
