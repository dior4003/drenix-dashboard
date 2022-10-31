import React from "react";
import { Link } from "react-router-dom";
import Corusel from "./ui/Coruserl";

export default function Section5({ data }) {
  console.log(data);
  return (
    <section className="section_5">
      <div className="first_title">
        <h1>{data ? data.title1 : ""}</h1>
      </div>
      <div className="second_title">
        <h1>{data ? data.title2 : ""}</h1>
      </div>
      <div className="corusel_section">
        <Corusel data={data ? data.corusel : []} />
      </div>
      <div
        className="tpc-btn-wrap aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="1900"
      >
        <Link className="tpc-btn" to="#a">
          {data ? data.button : ""}
        </Link>
      </div>
    </section>
  );
}
