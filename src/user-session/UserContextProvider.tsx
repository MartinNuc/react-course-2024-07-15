import { PropsWithChildren, useContext, useState } from "react";
import { User } from "./user";
import React from "react";

export type UserContextApi = {
  user: User | null,
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = React.createContext<UserContextApi>({
  login: () => { },
  logout: () => { },
  user: null
});

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserContextApi["user"]>(null);

  function login(user: User) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  const api = {
    user,
    login,
    logout
  };

  return (
    <UserContext.Provider value={api}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);