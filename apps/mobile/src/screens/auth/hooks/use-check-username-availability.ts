import { useQuery } from "@tanstack/react-query";
import { checkUsernameAvailability } from "../api/check-username-availability";

export function useCheckUsernameAvailability({
  username,
  enabled = true,
}: {
  username: string;
  enabled?: boolean;
}) {
  return useQuery({
    queryKey: ["username", username],
    queryFn: () => checkUsernameAvailability(username),
    retry: false,
    enabled,
  });
}
