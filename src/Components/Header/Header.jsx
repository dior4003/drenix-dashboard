import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/zH0oNVjnyWhU.png"
import NavbarBox from './ui/navbarBox'
import SearchForm from './ui/SearchForm'

export default function Header(props) {
    const {search , setSearch , nav ,setNav}=props
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
    const onNav=(e)=>{
        e.stopPropagation()
        setNav("col-6 navs")
    }
    return (
        <header className="header_box" onClick={()=>setSearch(false)}>
            <div className="rows">
            <div className="toggle" onClick={onNav}>
                        <span>
                        <i class="fa-solid fa-bars"></i>                        
                        </span>
                    </div>
                <div className="col-2">
                    <div className="logo_brand">
                        <Link top="/">
                            <img src={logo} alt={logo} className="" />
                        </Link>
                    </div>
                </div>
                <div className={nav} onClick={()=>setNav("col-6")}>
                    <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
                        <NavbarBox setNav={setNav} data={data} />
                    </nav>
                   
                </div>
                <div className="col-4">
                    <SearchForm search={search} setSearch={setSearch}/>

                </div>
            </div>



        </header>
    )
}
