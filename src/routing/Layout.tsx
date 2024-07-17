import { Outlet } from "react-router-dom";
import { UserInfoPane } from "../user-session/UserInfoPane";
import { Navbar } from "./Navbar";
import { Accordeon } from "../accordeon/accordeon";

export function Layout() {
  return <>
    <UserInfoPane />
    <Navbar />

    <Accordeon>
      <p>Ahoj</p>
      <p>cau</p>
      <p>nazdar</p>
    </Accordeon>

    <Outlet />
  </>
}