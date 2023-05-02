import { useQuery } from "@tanstack/react-query";
import { checkUsernameAvailability } from "../api/check-username-availability";

export function useCheckUsernameAvailability(username: string) {
  return useQuery({
    queryKey: ["username", username],
    queryFn: () => checkUsernameAvailability(username),
    retry: false,
  });
}
