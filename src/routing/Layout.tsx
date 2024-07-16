import { Outlet } from "react-router-dom";
import { UserInfoPane } from "../user-session/UserInfoPane";
import { Navbar } from "./Navbar";

export function Layout() {
  return <>
    <UserInfoPane />
    <Navbar />
    <Outlet />
  </>
}