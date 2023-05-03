import { useState } from "react";
import { StyleSheet } from "react-native";

import { useDebounce } from "../../src/hooks/use-debounce";
import { Text } from "../../src/components/text";
import { Input } from "../../src/components/input";
import { Button } from "../../src/components/button";
import { User } from "../../src/components/icons/filled/user";
import { useCheckUsernameAvailability } from "../../src/screens/auth/hooks/use-check-username-availability";

import { COLORS, SPACING } from "../../src/utils/styles";

export default function Auth() {
  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username, 250);
  const { data } = useCheckUsernameAvailability({
    username: debouncedUsername,
    enabled: debouncedUsername.length > 0,
  });

  const usernameIsAvailable = data?.available;

  return (
    <>
      <Text size="xl" isTitle style={{ marginBottom: SPACING.base }}>
        Choose your username. This is your unique identifier!
      </Text>
      <Input
        placeholder="username"
        leftElement={<User fill={COLORS.neutral[500]} />}
        onChangeText={(text) => setUsername(text)}
      />
      <Button disabled={!usernameIsAvailable} style={styles.button}>
        Let's chat!
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
});
