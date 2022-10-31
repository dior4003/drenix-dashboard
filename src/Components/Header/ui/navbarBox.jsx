import React from "react";
import { Link } from "react-router-dom";

export default function NavbarBox({ data }) {
  return (
    <ul className="nav_list">
      {data.map((item, i) => (
        <Link to={item.links} key={i}>
          <li className="">
            <span>
              <b>{item.title.toUpperCase()}</b>
            </span>
            <i className={item.icon}></i>
          </li>
        </Link>
      ))}
    </ul>
  );
}
