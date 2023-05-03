import { useState } from "react";
import { StyleSheet } from "react-native";

import { useDebounce } from "../../src/hooks/use-debounce";
import { Text } from "../../src/components/text";
import { Input } from "../../src/components/input";
import { Button } from "../../src/components/button";
import { User } from "../../src/components/icons/filled/user";
import { useCheckUsernameAvailability } from "../../src/screens/auth/hooks/use-check-username-availability";

import { COLORS, SPACING } from "../../src/utils/styles";

const ALPHANUMERIC_AND_UNDERSCORE = /^[a-zA-z0-9_]+$/;

export default function Auth() {
  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username, 250);

  const usernameIsValid =
    debouncedUsername.length > 0 &&
    debouncedUsername.length <= 12 &&
    ALPHANUMERIC_AND_UNDERSCORE.test(debouncedUsername) &&
    username === debouncedUsername;

  const { data } = useCheckUsernameAvailability({
    username: debouncedUsername,
    enabled: usernameIsValid,
  });

  const usernameIsAvailable = data?.available && usernameIsValid;

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
