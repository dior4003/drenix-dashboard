import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import MainSection from "./Section1";
import Section10 from "./Section10/Section10";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";

export function MainUpd({upd}) {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState(null);
  const [lang, setLang] = useState("uz");
  useEffect(() => {
    fetch(`https://drenix-back.herokuapp.com/${lang}`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setData(data[0]);
        // console.log(data[0]);
        // setLoading(false);
      });
  }, [lang]);
  useEffect(() => {
    fetch(`https://drenix-back.herokuapp.com/`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setPosts(data);
        // setLoading(false);
      });
  }, []);
  const [nav, setNav] = useState("col-6");
  const [search, setSearch] = useState(false);
  
  // console.log(update);

  return (
    <div onClick={() => setSearch(false)}>
      {data === null ? (
        <Loader />
      ) : (
        <>
          <Header
            nav={nav}
            setNav={setNav}
            search={search}
            setSearch={setSearch}
            data={data.header}
            lang={lang}
            setLang={setLang}
            upd={upd}
            
          />
          <MainSection 
            data={data.section1} 
            upd={upd}
            
            />
          <Section2 data={data.section2} upd={upd} />
          <Section3 data={data.section3} upd={upd} />
          <Section4 data={data.section4} upd={upd} />
          <Section5 data={data.sectoin5} upd={upd} />
          <Section6 data={data.seaction6} upd={upd} />
          <Section7 data={data.sectoin7} upd={upd} />
          <Section8 data={data.section8} upd={upd} />
          {posts > 0 ? <Section9 upd={upd}/> : null}
          <Section10 data={data.section10} />
          <Footer data={data.footer} upd={upd} />
        </>
      )}
    </div>
  );
}
