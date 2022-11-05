import React from "react";
import { Link } from "react-router-dom";
import LinkComponent from "./ui/link_component";

export default function Footer({ data }) {
  const social = [
    {
      link: "#f",
      icon: "fa-brands fa-facebook",
    },
    {
      link: "",
      icon: "fa-brands fa-twitter",
    },
    {
      link: "",
      icon: "fa-brands fa-youtube",
    },
  ];

  return (
    <footer className="footer">
      <div className="links">
        {data.useLink.map((item, i) => (
          <LinkComponent item={item} key={i} />
        ))}
      </div>
      <hr />
      <div className="foo_bar">
        <p>© Copyright 2022 Drenix All rights reserved.</p>
        <ul className="social_box">
          {social.map((item, i) => (
            <li key={i}>
              <Link to={item.link}>
                <i className={item.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
