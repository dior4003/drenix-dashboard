import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SidebarItem({data}) {
  const [menu, setMenu] = useState(false);
  return (
    <div className='list_menu'>
      <li className='dash_list_item' onClick={() => setMenu(!menu)}>
        <i className='fa-regular fa-bell i'>
          <i className='dot'></i>
        </i>
        <span>{data.name}</span>
      </li>
      {menu ? (
        data.menus?(
          data.menus.map((item ,i)=>(
            <ul className='list_menus' key={i}>
              <Link to={item.link} >
              <li className='list_menu_item'>{item.name}</li>
              </Link>
            </ul>
          ))
        )
        :null
      ) : null}
    </div>
  );
}
