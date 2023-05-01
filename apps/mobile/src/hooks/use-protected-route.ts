import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";

export function useProtectedRoute(username) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !username &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/auth");
    } else if (username && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [username, segments]);
}
