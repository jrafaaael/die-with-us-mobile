import { createContext } from "react";
import { useProtectedRoute } from "../hooks/use-protected-route";

const AuthContext = createContext(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function AuthProvider({ children }: Props) {
  useProtectedRoute(null);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
