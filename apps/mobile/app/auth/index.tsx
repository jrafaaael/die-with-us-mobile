import { StyleSheet } from "react-native";

import { Text } from "../../src/components/text";
import { Input } from "../../src/components/input";
import { Button } from "../../src/components/button";
import { User } from "../../src/components/icons/filled/user";

import { COLORS, SPACING } from "../../src/utils/styles";

export default function Auth() {
  return (
    <>
      <Text size="xl" isTitle style={{ marginBottom: SPACING.base }}>
        Choose your username. This is your unique identifier!
      </Text>
      <Input
        placeholder="username"
        leftElement={<User fill={COLORS.neutral[500]} />}
      />
      <Button style={styles.button}>Let's chat!</Button>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
});
