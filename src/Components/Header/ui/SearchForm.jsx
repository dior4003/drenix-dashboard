import React from "react";

export default function SearchForm({ search, setSearch, lang, setLang }) {
  const hendlSubmit = (e) => {
    e.preventDeafault();
    e.stopPropagation();
  };
  const hendleClick = (e) => {
    e.stopPropagation();
    setSearch(!search);
  };
  const handleLang = (e) => {
    e.stopPropagation();
    if (lang === "uz") {
      setLang("ru");
    } else {
      setLang("uz");
    }
  };
  return (
    <div className="search_box">
      <div className="search_box_item">
        <span className="phone_icon">
          <i className="fa-solid fa-phone text-primary fs-5"></i>
        </span>
        <div className="box_text">
          <span className="text_muted">Free Consultant</span>
          <span className="phone">
            <b>+998900078985</b>
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
