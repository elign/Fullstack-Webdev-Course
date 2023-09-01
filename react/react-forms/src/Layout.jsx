import { Outlet } from "react-router-dom";
import Header from "./component/Header";

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
