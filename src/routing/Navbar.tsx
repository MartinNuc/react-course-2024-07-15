import { Link } from "react-router-dom";

export function Navbar() {
  return <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/modal">Modal</Link>
    </li>
    <li>
      <Link to="/votes">Album voting</Link>
    </li>
    <li>
      <Link to="/categories">Categories</Link>
    </li>
  </ul>
}