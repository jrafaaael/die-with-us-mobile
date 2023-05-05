import { createContext } from "react";
import { useMMKVString } from "react-native-mmkv";

import { useProtectedRoute } from "../hooks/use-protected-route";

const AuthContext = createContext(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function AuthProvider({ children }: Props) {
  const [username] = useMMKVString("username");

  useProtectedRoute(username);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
