import { createContext } from "react";
import { useMMKVString } from "react-native-mmkv";

import { useProtectedRoute } from "../hooks/use-protected-route";

const UserContext = createContext(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function UserProvider({ children }: Props) {
  const [username] = useMMKVString("username");

  useProtectedRoute(username);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}
