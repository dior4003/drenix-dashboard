import React from "react";

export default function Section7({ data }) {
  return (
    <section className="section_7">
      <div className="container">
        <div className="row">
          <div className="text_">
            <h4>{data ? data.title1 : ""}</h4>
          </div>
          <div className="decr">
            <h1>{data ? data.title2 : ""}</h1>
          </div>
          <div className="card_box">
            {data
              ? data.team.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: `url(https://drenix-back.herokuapp.com/static/media/${item.img})`,
                      backgroundSize: "contain",
                    }}
                    className="card"
                  >
                    <div className="cards">
                      <div className="shape">
                        <ul className="social_box">
                          <li>
                            <a href={item.facebook.link}
                            >
                              <i className={item.facebook.icon}></i>
                            </a>
                          </li>
                          <li>
                            <a 
                              href={item.twitter.link}
                            >
                              <i className={item.twitter.icon}></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={item.youtube.link}
                            >
                              <i className={item.youtube.icon}></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="decr_box">
                      <h4 className="author">{item.name}</h4>
                      <p>{item.spes}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}
