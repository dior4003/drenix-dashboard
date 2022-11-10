import React from "react";
import { useContext } from "react";
import Dashboard from "./Dashboard";
import { AuthContext } from "./Hooks/context";

import Login from "./Login";

export function Main() {
  const { isLogin } = useContext(AuthContext);
  return <div>{isLogin ? <Dashboard /> : <Login />}</div>;
}
