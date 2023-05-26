import { useState } from "react";
import { StyleSheet } from "react-native";
import { z } from "zod";

import { Text } from "../../src/components/text";
import { Input } from "../../src/components/input";
import { Button } from "../../src/components/button";
import { User } from "../../src/components/icons/filled/user";
import { useUser } from "../../src/providers/user-provider";
import { useDebounce } from "../../src/hooks/use-debounce";
import { useCheckUsernameAvailability } from "../../src/screens/auth/hooks/use-check-username-availability";
import { useRegisterUser } from "../../src/screens/auth/hooks/use-register-user";

import { COLORS, SPACING } from "../../src/utils/styles";

const ALPHANUMERIC_AND_UNDERSCORE = /^[a-zA-z0-9_]+$/;

const usernameSchema = z
  .string()
  .min(3)
  .max(12)
  .regex(ALPHANUMERIC_AND_UNDERSCORE);

export default function Auth() {
  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username, 500);
  const { setStoredUser } = useUser();
  const userRegister = useRegisterUser();
  const usernameAvailability = useCheckUsernameAvailability({
    username: debouncedUsername,
    enabled: usernameSchema.safeParse(debouncedUsername).success,
  });

  const handleRegister = () => {
    userRegister.mutate(
      { username: debouncedUsername },
      {
        onSuccess: (data) => {
          setStoredUser(data);
        },
      },
    );
  };

  return (
    <>
      <Text size="xl" isTitle style={styles.title}>
        Choose your username. This is your unique identifier!
      </Text>
      <Input
        placeholder="username"
        leftElement={<User fill={COLORS.neutral[500]} />}
        onChangeText={(text) => setUsername(text)}
      />
      <Button
        disabled={
          !usernameAvailability.data?.available ||
          userRegister.isLoading ||
          username !== debouncedUsername
        }
        style={styles.button}
        onPress={handleRegister}
      >
        Let's chat!
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: SPACING.base,
  },
  button: {
    marginTop: "auto",
  },
});
