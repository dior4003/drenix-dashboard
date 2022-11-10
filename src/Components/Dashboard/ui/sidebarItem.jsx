import React from "react";
import { useState } from "react";

export default function SidebarItem() {
  const [menu, setMenu] = useState(false);
  return (
    <div className='list_menu'>
      <li className='dash_list_item' onClick={() => setMenu(!menu)}>
        <i className='fa-regular fa-bell i'>
          <i className='dot'></i>
        </i>
        <span>Dashboard</span>
      </li>
      {menu ? (
        <ul className='list_menus'>
          <li className='list_menu_item'></li>
        </ul>
      ) : null}
    </div>
  );
}
