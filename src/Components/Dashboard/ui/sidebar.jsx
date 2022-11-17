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
  const data =[
    {
      name:"Dashboard",
      menus:[
        {
          name:"Xabarlar",
          link:"/massage"
        },
        {
          name:"Savollar",
          link:"/questions"
        },
        {
          name:"Bildirishnomalar",
          link:"/notifications"
        },

      ]
    },
    {
      name:"Tahrirlash",
      menus:[
        {
          name:"Matnlarni tahrirlash",
          link:"/edit-text"
        },
        {
          name:"Medialarni tahrirlash",
          link:"/edit-media"
        },
        {
          name:"Bloklarni tahrirlaah",
          link:"/edit-section"
        },

      ]
    },
    {
      name:"Galereya",
      menus:[
        {
          name:"Xabarlar",
          link:"/"
        },
        {
          name:"Savollar",
          link:"/"
        },
        {
          name:"Bildirishnomalar",
          link:"/"
        },

      ]
    },
    {
      name:"Yuklamalar",
     
    }
  ];
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
        {data.map((item ,i )=>(
           <SidebarItem data={item} key={i}/>
        ))}
       
        
      </ul>
    </div>
  );
}
