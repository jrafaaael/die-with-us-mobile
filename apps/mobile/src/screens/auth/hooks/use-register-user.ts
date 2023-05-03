import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { registerUser } from "../api/register-user";

interface Options extends UseMutationOptions {
  username: string;
}

export function useRegisterUser({ username }: Options) {
  return useMutation({
    mutationFn: () => registerUser(username),
  });
}
