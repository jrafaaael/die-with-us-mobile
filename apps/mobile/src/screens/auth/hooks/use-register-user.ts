import { useMutation } from "@tanstack/react-query";
import { rq } from "../../../libs/axios";

async function registerUser(username: string) {
  const res = await rq.post("users", { username });

  return res.data;
}

interface RegisterUser {
  username: string;
}

export function useRegisterUser() {
  return useMutation({
    mutationFn: ({ username }: RegisterUser) => registerUser(username),
  });
}
