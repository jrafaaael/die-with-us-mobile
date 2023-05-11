import { createContext, useContext } from "react";
import { useMMKVString } from "react-native-mmkv";

import { useProtectedRoute } from "../hooks/use-protected-route";

interface ContextProps {
  storedUsername: string;
  setStoredUsername: (value: string | ((current: string) => string)) => void;
}

const UserContext = createContext<ContextProps | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function UserProvider({ children }: Props) {
  const [storedUsername, setStoredUsername] = useMMKVString("username");

  useProtectedRoute(storedUsername);

  return (
    <UserContext.Provider value={{ storedUsername, setStoredUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
