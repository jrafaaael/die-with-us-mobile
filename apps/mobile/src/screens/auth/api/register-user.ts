import { rq } from "../../../libs/axios";

export async function registerUser(username: string) {
  const res = rq.post("users", { username });

  console.log(res);
}
