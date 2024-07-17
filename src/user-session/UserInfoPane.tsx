import { useAppSelector } from "../store/hook";
import { CurrentUserInfo } from "./CurrentUserInfo";
import { LoginForm } from "./LoginForm";

export function UserInfoPane() {
  const user = useAppSelector(store => store.userSessionSlice.user);

  return <div>
    {user ? <CurrentUserInfo /> : <LoginForm />}
  </div>
}