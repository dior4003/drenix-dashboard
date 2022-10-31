import React from "react";

export default function Section6({ data }) {
  return (
    <section className="section_6">
      <div className="img_section">
        <div className="back"></div>
        <div className="img"></div>
      </div>
      <div className="decr_section">
        <div className="title">
          <h4>{data ? data.title1 : ""}</h4>
        </div>
        <div className="decr">
          <h2>{data ? data.title2 : ""}</h2>
        </div>
        <div className="card_box">
          {data
            ? data.items.map((item, i) => (
                <div className="card" key={i}>
                  <div className="icon">
                    <img
                      src={`https://drenix-back.herokuapp.com/static/media/${item.icon}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="text_box">
                    <div className="title">
                      <h1>{item.title}</h1>
                    </div>
                    <div className="decri">
                      <p>{item.decr}</p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
