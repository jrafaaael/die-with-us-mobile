export async function checkUsernameAvailability(username: string): Promise<{
  available: boolean;
}> {
  const res = await fetch(
    `http://192.168.0.184:3000/users/username-available?username=${username}`,
  );

  if (!res.ok) {
    Promise.reject(res);
  }

  const data = await res.json();

  return data;
}
