import { CurrentUserInfo } from "./CurrentUserInfo";
import { LoginForm } from "./LoginForm";
import { useUser } from "./UserContextProvider";

export function UserInfoPane() {
  const { user } = useUser();

  return <div>
    {user ? <CurrentUserInfo /> : <LoginForm />}
  </div>
}