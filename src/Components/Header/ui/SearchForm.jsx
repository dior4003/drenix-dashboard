import React from "react";
import { useState } from "react";

export default function SearchForm({
  search,
  setSearch,
  lang,
  setLang,
  data,
  upd,
  setPxone,
  setTht,
}) {
  const hendlSubmit = (e) => {
    e.preventDeafault();
    e.stopPropagation();
  };
  const hendleClick = (e) => {
    e.stopPropagation();
    setSearch(!search);
  };
  const [tel, setTel] = useState(data.phone);
  const [text, setText] = useState(data.phone_txt ? data.phone_txt : null);

  const hendleChange = (e) => {
    if (e.target.name === "tel") {
      setTel(e.target.value);
    } else {
      setText(e.target.value);
    }
  };
  setPxone(tel);
  setTht(text);

  const handleLang = (e) => {
    e.stopPropagation();
    if (lang === "uz") {
      setLang("ru");
      localStorage.setItem("lang", "ru");
    } else {
      setLang("uz");
      localStorage.setItem("lang", "uz");
    }
    window.location.reload();
  };
  return (
    <div className="search_box">
      <div className="search_box_item">
        <span className="phone_icon">
          <i className="fa-solid fa-phone text-primary fs-5"></i>
        </span>
        <div className="box_text">
          <span className="text_muted">
            {upd ? (
              <input
                className="edit_input"
                style={{
                  width: `${
                    data.phone_txt ? data.phone_txt.length * 10 : 100
                  }px`,
                }}
                type="text"
                value={text}
                name="text"
                onChange={hendleChange}
              />
            ) : (
              data.phone_txt
            )}
          </span>
          <span className="phone">
            <b>
              {upd ? (
                <input
                  className="edit_input"
                  style={{ width: `${data ? data.phone.length * 10 : 100}px` }}
                  type="text"
                  value={tel}
                  onChange={hendleChange}
                  name="tel"
                />
              ) : (
                data.phone
              )}
            </b>
          </span>
        </div>
        <div className="search_btns">
          <span className="btn_border" onClick={hendleClick}>
            {search ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-magnifying-glass"></i>
            )}
          </span>

          <span className="btn_border" onClick={handleLang}>
            {lang === "uz" ? <i> 🇺🇿</i> : <i>🇷🇺</i>}
          </span>
        </div>
      </div>
      {search ? (
        <div className="search" onClick={(e) => e.stopPropagation()}>
          <form className="search_form" onSubmit={hendlSubmit}>
            <div className="action">
              <input type="text" />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
