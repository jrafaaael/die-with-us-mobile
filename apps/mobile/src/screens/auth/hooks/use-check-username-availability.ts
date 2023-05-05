import { useQuery } from "@tanstack/react-query";
import { rq } from "../../../libs/axios";

async function checkUsernameAvailability(username: string): Promise<{
  available: boolean;
}> {
  const res = await rq.get(`users/username-available`, {
    params: { username },
  });

  return res.data;
}

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
