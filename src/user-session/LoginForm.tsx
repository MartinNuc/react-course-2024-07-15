import { useState } from "react";
import { useAppDispatch } from "../store/hook";
import { login } from "../store/user-session-slice";

export function LoginForm() {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return <div data-testid="LoginForm">
    <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

    <button onClick={() => dispatch(login({username, email}))}>Login</button>
  </div>
}
