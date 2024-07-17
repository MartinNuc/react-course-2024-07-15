import { useAppDispatch, useAppSelector } from "../store/hook";
import { logout } from "../store/user-session-slice";

export const CurrentUserInfo = () => {
  const user = useAppSelector(store => store.userSessionSlice.user);
  const dispatch = useAppDispatch();

  if (!user) { return null; }

  return <>
    <p>username: {user.username}</p>
    <p>email: {user.email}</p>
    <button onClick={() => dispatch(logout())}>logout</button>
  </>;
}