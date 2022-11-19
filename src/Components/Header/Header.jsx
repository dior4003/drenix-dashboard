import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Redux from "../redux/redux";
import NavbarBox from "./ui/navbarBox";
import SearchForm from "./ui/SearchForm";

export default function Header(props) {
  const { search, setSearch, nav, setNav, data, lang, setLang, upd } = props;
  const [arr, setArr] = useState(data.links);
  const [tht, setTht] = useState(data.phone_txt);
  const [pxone, setPxone] = useState(data.phone);
 
    // Redux("head", {
    //   ...data,
    //   links: arr,
    //   phone: pxone,
    //   phone_txt: tht,
    // });
 
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
            <Link top="/"></Link>
          </div>
        </div>
        <div className={nav} onClick={() => setNav("col-6")}>
          <nav className="navbar" onClick={(e) => e.stopPropagation()}>
            <NavbarBox
              setNav={setNav}
              data={data.links}
              upd={upd}
              arr={arr}
              setArr={setArr}
            />
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
            tht={tht}
            pxone={pxone}
            setTht={setTht}
            setPxone={setPxone}
          />
        </div>
      </div>
    </header>
  );
}
