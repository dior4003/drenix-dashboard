import React from "react";
import { useState } from "react";
import { Corusel } from "./ui/corusel";
import { ParticlesApp } from "./ui/particles";

export default function Section8({ data ,upd}) {
  const [section8, setSection8] = useState(data);
  return (
    <section className="section_8">
      <ParticlesApp />
      <Corusel
        data={data.corusel ? data.corusel : []}
        upd={upd}
        section8={section8}
        setSection8={setSection8}
      />
      <div className="left_box">
        <div className="title">
          <h2>
            {upd ? (
              <input
                className="edit_input"
                style={{
                  width: `${data.title1.length * 10}px`,
                }}
                type="text"
                name="name"
                value={section8.title1}
                onChange={(e) =>
                  setSection8({
                    ...section8,
                    title1: e.target.value,
                  })
                }
              />
            ) : (
              data.title1
            )}
          </h2>
        </div>
        <div className="decr">
          <h1>
            {upd ? (
              <textarea
                className="edit_input"
                style={{
                  width: `400px`,
                  height: `100px`,
                }}
                name={`text`}
                type="text"
                value={section8.title2}
                onChange={(e) =>
                  setSection8({ ...section8, title2: e.target.value })
                }
              ></textarea>
            ) : (
              section8.title2
            )}
          </h1>
        </div>
      </div>
    </section>
  );
}
