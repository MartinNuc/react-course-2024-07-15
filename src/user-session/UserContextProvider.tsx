import { PropsWithChildren, useContext, useReducer, useState } from "react";
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

type LoginAction = {
  type: 'login',
  payload: User
};

type LogoutAction = {
  type: 'logout'
};

type UserContextAction = LoginAction | LogoutAction;

function reducer(state: User | null, action: UserContextAction) {
  switch (action.type) {
    case "login":
      return action.payload;
    case 'logout':
      return null;
    default:
      return state;
  }
}

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, dispatch] = useReducer(reducer, null);

  function login(user: User) {
    dispatch({ type: "login", payload: user });
  }

  function logout() {
    dispatch({ type: "logout"});
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