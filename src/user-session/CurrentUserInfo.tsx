import { useUser } from "./UserContextProvider";

export const CurrentUserInfo = () => {
  const {user, logout} = useUser();

  if (!user) { return null; }

  return <>
    <p>username: {user.username}</p>
    <p>email: {user.email}</p>
    <button onClick={logout}>logout</button>
  </>;
}