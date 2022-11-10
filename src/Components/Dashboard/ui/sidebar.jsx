import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Hooks/context";
import SidebarItem from "./sidebarItem";

export default function Sidebar() {
  const { setIsLogin } = useContext(AuthContext);
  const LogOut = () => {
    localStorage.removeItem("auth");
    setIsLogin(false);
  };
  return (
    <div className='sidebar'>
      <div className='logo_icon'>
        <img
          src='https://drenix-back.herokuapp.com/static/media/logo.png'
          alt=''
        />
        <button className='logOut' onClick={LogOut}>
          <i className='fa-solid fa-right-from-bracket'></i>
        </button>
      </div>
      <ul className='dash_list'>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </ul>
    </div>
  );
}
