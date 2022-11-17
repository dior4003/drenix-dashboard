import React from "react";
import { Link } from "react-router-dom";
import NavbarBox from "./ui/navbarBox";
import SearchForm from "./ui/SearchForm";

export default function Header(props) {
  const { search, setSearch, nav, setNav, data, lang, setLang ,upd } = props;
  

  const onNav = (e) => {
    e.stopPropagation();
    setNav("col-6 navs");
  };
  return (
    <header className="header_box" onClick={() => setSearch(false)}>
      <div className="rows">
        <div className="toggle" onClick={onNav}>
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
        <div className="col-2">
          <div className="logo_brand">
            <Link top="/">
              
            </Link>
          </div>
        </div>
        <div className={nav} onClick={() => setNav("col-6")}>
          <nav className="navbar" onClick={(e) => e.stopPropagation()}>
            <NavbarBox setNav={setNav} data={data.links} upd={upd} />
          </nav>
        </div>
        <div className="col-4">
          <SearchForm
            data={data}
            search={search}
            setSearch={setSearch}
            lang={lang}
            setLang={setLang}
            upd={upd}
          />
        </div>
      </div>
    </header>
  );
}
