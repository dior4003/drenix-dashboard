import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function NavbarBox({ data }) {
    const [isNum, setIsNum] = useState(0)


    return (
        <ul className="nav_list">
            {data.map((item, i) => (
                <Link to={item.links} key={i} className={item.id === isNum ? "" : ""} onClick={() => setIsNum(i)} >
                    <li className="">
                        <span><b>{item.title.toUpperCase()}</b></span>
                        <i className={item.icon}></i>
                    </li>

                </Link >
            ))}
        </ul>
    )
}
