import { useMutation } from "@tanstack/react-query";
import { rq } from "../../../libs/axios";

interface RegisterUser {
  username: string;
}

async function registerUser(username: string): Promise<RegisterUser> {
  const res = await rq.post("users", { username });

  return res.data;
}

export function useRegisterUser() {
  return useMutation({
    mutationFn: ({ username }: RegisterUser) => registerUser(username),
  });
}
