import React from "react";
import { useState } from "react";

export default function Section6({ data, upd }) {
  const [section6, setSection6] = useState(data);
  return (
    <section className="section_6">
      <div className="img_section">
        <div className="back"></div>
        <div className="img"></div>
      </div>
      <div className="decr_section">
        <div className="title">
          <h4>
            {upd ? (
              <input
                className="edit_input"
                style={{
                  width: `${data.title1.length * 10}px`,
                }}
                type="text"
                name="name"
                value={section6.title1}
                onChange={(e) =>
                  setSection6({
                    ...section6,
                    title1: e.target.value,
                  })
                }
              />
            ) : (
              data.title1
            )}
          </h4>
        </div>
        <div className="decr">
          <h2>
            {upd ? (
              <textarea
                className="edit_input"
                style={{
                  width: `400px`,
                  height: `100px`,
                }}
                name={`text`}
                type="text"
                value={section6.title2}
                onChange={(e) =>
                  setSection6({ ...section6, title2: e.target.value })
                }
              ></textarea>
            ) : (
              section6.title2
            )}
          </h2>
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
                      <h1>
                        {upd ? (
                          <input
                            className="edit_input"
                            style={{
                              width: `${data.title1.length * 10}px`,
                            }}
                            type="text"
                            name="name"
                            value={section6.items[i].title}
                            onChange={(e) =>
                              setSection6({
                                ...section6,
                                items: {
                                  ...section6.items,
                                  [i]: {
                                    title: e.target.value,
                                  },
                                },
                              })
                            }
                          />
                        ) : (
                          item.title
                        )}
                      </h1>
                    </div>
                    <div className="decri">
                      <p>
                        {upd ? (
                          <textarea
                            className="edit_input"
                            style={{
                              width: `100%`,
                              height: `100px`,
                            }}
                            name={`text${i}`}
                            type="text"
                            value={section6.items[i].decr}
                            onChange={(e) =>
                              setSection6({
                                ...section6,
                                items: {
                                  ...section6.items,
                                  [i]: {
                                    decr: e.target.value,
                                  },
                                },
                              })
                            }
                          ></textarea>
                        ) : (
                          item.decr
                        )}
                      </p>
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
