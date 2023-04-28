import { StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, SPACING } from "../src/utils/styles";

export default function MainLayout() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Slot />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.base,
    paddingTop: SPACING.base,
    backgroundColor: COLORS.neutral[950],
    flex: 1,
  },
});
