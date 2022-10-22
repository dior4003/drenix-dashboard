import React from 'react'
import { Link } from "react-router-dom"

export default function Link_component({item}) {
    const { logo, logoTitle, links } = item;
    return (
        <div className="contact">
            <div className="logo">
                {logo ? <img src={logo} alt="" /> : <h3>{logoTitle}</h3>}
            </div>
            <ul className="list_group">
                {links.map((item, i) => (
                    item.url ?
                        <Link to={item.url} key={i+1000}>
                            <li className="list_item">{item.icon ? <i className={item.icon}></i> : null} <span>{item.title}</span></li>
                        </Link>
                        : <li className="list_item">{item.icon ? <i className={item.icon}></i> : null} <span>{item.title}</span></li>
                ))}


            </ul>
        </div>
    )
}
