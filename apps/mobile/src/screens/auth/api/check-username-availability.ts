import { rq } from "../../../libs/axios";

export async function checkUsernameAvailability(username: string): Promise<{
  available: boolean;
}> {
  const res = await rq.get(`users/username-available`, {
    params: { username },
  });

  return res.data;
}
