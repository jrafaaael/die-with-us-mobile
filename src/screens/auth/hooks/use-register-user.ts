import { useMutation } from "@tanstack/react-query";

import { User } from "../types/user";
import { rq } from "../../../libs/axios";

interface UsernameToRegister {
  username: string;
}

async function registerUser(username: string): Promise<User> {
  const res = await rq.post("users", { username });

  return res.data;
}

export function useRegisterUser() {
  return useMutation({
    mutationFn: ({ username }: UsernameToRegister) => registerUser(username),
  });
}
