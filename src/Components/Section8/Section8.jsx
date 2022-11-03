import React from "react";
import { Corusel } from "./ui/corusel";
import { ParticlesApp } from "./ui/particles";

export default function Section8({ data }) {
  return (
    <section className="section_8">
      <ParticlesApp/>
      <Corusel data={data.corusel ? data.corusel : []} />
      <div className="left_box">
        <div className="title">
          <h2>{data ? data.title1 : ""}</h2>
        </div>
        <div className="decr">
          <h1>{data ? data.title2 : ""}</h1>
        </div>
      </div>
    </section>
  );
}
