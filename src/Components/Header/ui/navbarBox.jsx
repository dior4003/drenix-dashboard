import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function NavbarBox({ data }) {
    const [isNum, setIsNum] = useState(0)
    const navItem = data.map((item, i) => (
        <Link to={item.links} className={item.id === isNum ? "" : ""} onClick={() => setIsNum(i)} >
            <li className="">
                <span><b>{item.title.toUpperCase()}</b></span>
                <i className={item.icon}></i>
            </li>

        </Link >
    ))

    return (
        <ul className="nav_list">
            {navItem}
        </ul>
    )
}
