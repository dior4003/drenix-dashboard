import React from "react";
import { Link } from "react-router-dom";

export default function Section2({ data }) {
  return (
    <section className="elementor-section">
      <div className="row">
        {data.map((item) => (
          <div className="col-3" key={item.title}>
            <Link to="/">
              <div className="card_">
                <div className="card_body">
                  <span className="shape"></span>
                  <div className="logo">
                    <img
                      src={`https://drenix-back.herokuapp.com/static/media/${item.img}`}
                      alt={`https://drenix-back.herokuapp.com/static/media/${item.img}`}
                    />
                  </div>
                  <div className="title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="sub_title">
                    <p>{item.sub_title}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
