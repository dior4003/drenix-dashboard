import React from 'react'
import { Link } from "react-router-dom"

export default function LinkComponent({item}) {
    const { logo, links } = item;
    return (
        <div className="contact">
            <div className="logo">
                {logo.type==="logo" ? <img src={`https://drenix-back.herokuapp.com/static/media/logo.png`} alt="" /> : <h3>{logo.url}</h3>}
            </div>
            <ul className="list_group">
                {links.map((items, i) => (
                        <Link to={items.url} key={i+1000}>
                            <li className="list_item">{items.icon ? <i className={items.icon}></i> : null} <span>{items.title}</span></li>
                        </Link>
                ))}


            </ul>
        </div>
    )
}
