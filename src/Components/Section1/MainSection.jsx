import React from "react";
import { Link } from "react-router-dom";

export default function MainSection({ data }) {
  return (
    <div className="main_box">
      <div className="main_box_background">
        <div className="shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <div className="hero-content">
                <h3 className="sub-title aos-init aos-animate">
                  {data.title1}
                </h3>
                <h2 className="title aos-init aos-animate">{data.title2}</h2>
                <p
                  data-aos-delay="1400"
                  data-aos="fade-up"
                  className="aos-init aos-animate"
                >
                  {data.title3}
                </p>
                <div
                  className="tpc-btn-wrap aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="1900"
                >
                  <Link className="tpc-btn" to="#a">
                    {data.button}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
