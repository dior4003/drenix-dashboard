import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/zH0oNVjnyWhU.png"
import NavbarBox from './ui/navbarBox'
import SearchForm from './ui/SearchForm'

export default function Header() {
    const data = [
        {
            id: 0,
            title: "Home",
            links: "/",
            icon: "bi bi-chevron-down"
        },
        {
            id: 1,
            title: "About Us",
            link: "#about",
            icon: "bi bi-chevron-down"
        },
        {
            id: 2,
            title: "Pages",
            link: "#pages",
            icon: "bi bi-chevron-down"
        },
        {
            id: 3,
            title: "Contact",
            link: "#contact",
            icon: "bi bi-chevron-down"
        },

    ]

    return (
        <header className="header_box">
            <div className="rows">
                <div className="col-2">
                    <div className="logo_brand">
                        <Link top="/">
                            <img src={logo} alt={logo} className="" />
                        </Link>
                    </div>
                </div>
                <div className="col-6">
                    <nav className="navbar">
                        <NavbarBox data={data} />
                    </nav>
                </div>
                <div className="col-4">
                    <SearchForm />

                </div>
            </div>



        </header>
    )
}
