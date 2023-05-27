import { useState } from "react";
import { StyleSheet, View } from "react-native";
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
  .min(3, { message: "Username must be 3 or more characters long" })
  .max(12, { message: "Username must be 12 or fewer characters long" })
  .regex(ALPHANUMERIC_AND_UNDERSCORE, {
    message: "Username must be alphanumeric and '_'",
  });

export default function Auth() {
  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username, 500);
  const { setStoredUser } = useUser();
  const userRegister = useRegisterUser();
  const usernameAvailability = useCheckUsernameAvailability({
    username: debouncedUsername,
    enabled: usernameSchema.safeParse(debouncedUsername).success,
  });

  const usernameResult = usernameSchema.safeParse(username);

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
      <View style={styles.errorsContainer}>
        {usernameResult.success === false
          ? usernameResult.error.issues.map(({ message }, idx) => (
            <Text key={idx} size="xs" style={styles.textValidationError}>
              {message}
            </Text>
          ))
          : null}
        {usernameAvailability.data &&
          !usernameAvailability?.data?.available &&
          username === debouncedUsername ? (
          <Text size="xs" style={styles.textValidationError}>
            Username already exists
          </Text>
        ) : null}
      </View>
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
  errorsContainer: {
    marginTop: SPACING.sm,
    gap: SPACING.sm / 2,
  },
  textValidationError: {
    color: COLORS.red[500],
  },
});
