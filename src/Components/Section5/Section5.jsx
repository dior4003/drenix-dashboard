import React from "react";
import { useState } from "react";
import Corusel from "./ui/Coruserl";

export default function Section5({ data, upd }) {
  const [section5, setSection5] = useState(data);
  return (
    <section className="section_5">
      <div className="first_title">
        <h1>
          {upd ? (
            <input
              className="edit_input"
              style={{
                width: `${data.title1.length * 10}px`,
              }}
              type="text"
              name="name"
              value={section5.title1}
              onChange={(e) =>
                setSection5({
                  ...section5,
                  title1: e.target.value,
                })
              }
            />
          ) : (
            data.title1
          )}
        </h1>
      </div>
      <div className="second_title">
        <h1>
          {upd ? (
            <input
              className="edit_input"
              style={{
                width: `${data.title2.length * 10}px`,
              }}
              type="text"
              name="name"
              value={section5.title2}
              onChange={(e) =>
                setSection5({
                  ...section5,
                  title2: e.target.value,
                })
              }
            />
          ) : (
            data.title2
          )}
        </h1>
      </div>
      <div className="corusel_section">
        <Corusel data={data ? data.corusel : []} />
      </div>
      {data.button ? (
        <div
          className="tpc-btn-wrap aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="1900"
        >
          <span className="tpc-btn">
            {upd ? (
              <input
                className="edit_input"
                style={{
                  width: `${data.button.length * 10}px`,
                }}
                type="text"
                name="name"
                value={section5.button}
                onChange={(e) =>
                  setSection5({
                    ...section5,
                    button: e.target.value,
                  })
                }
              />
            ) : (
              data.button
            )}
          </span>
        </div>
      ) : null}
    </section>
  );
}
