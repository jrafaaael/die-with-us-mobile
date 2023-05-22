import { createContext, useContext } from "react";
import { useMMKVObject } from "react-native-mmkv";

import { useProtectedRoute } from "../hooks/use-protected-route";
import { User } from "../screens/auth/types/user";

interface ContextProps {
  storedUser: User;
  setStoredUser: (value: User) => void;
}

const UserContext = createContext<ContextProps | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function UserProvider({ children }: Props) {
  const [storedUser, setStoredUser] = useMMKVObject<User>("username");

  useProtectedRoute(storedUser ?? null);

  return (
    <UserContext.Provider value={{ storedUser, setStoredUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
