import React from "react";
import img_1 from "../../images/ctiaxRXYSAeB.jpg";
import img_2 from "../../images/5Y9VVobzMOQ2.png";
export default function Section3({ data }) {
  return (
    <div className="section_3">
      <div className="row">
        <div className="col-6">
          <div className="img_box">
            <div className="img_1">
              <img src={img_1} alt="img_1" />
            </div>
            <div className="img_2">
              <img src={img_2} alt="img_2" />
            </div>
            <div className="img_3">
              <img
                src="https://thepixelcurve.com/wp/techmax/wp-content/uploads/2022/01/BBT5573.png"
                alt="img_2"
              />
            </div>
          </div>
        </div>
        <div className="center_box">
          <div className="circle_"></div>
          <div className="circle_1"></div>
          <div className="circle_2"></div>
          <div className="circle_3"></div>
          <div className="play_btn">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
        <div className="col-6">
          <div className="text_box">
            <div className="first_text">
              <h6 className="smal_text">{data.title1}</h6>
            </div>
            <div className="big_title">
              <h1>{data.title2}</h1>
            </div>
            <div className="small_title">
              <p>{data.title3}</p>
            </div>
            <div className="col-12">
              <div className="small_section">
                <div className="small_section_img">
                  <div className="image_small">
                    <img
                      src={`https://drenix-back.herokuapp.com/static/media/${data.derektor.img}`}
                      alt="author"
                    />
                  </div>
                  <div className="line"></div>
                  <div className="left">
                    <div className="small">
                    </div>
                    <div className="author_title">
                      <h4>
                        <b>{data.derektor.name}</b>
                      </h4>
                      <p>{data.derektor.job}</p>
                    </div>
                  </div>
                </div>
                <div className="small_section_list">
                  <ul className="left_check">
                    {data.adjus.map((item, i) => (
                      <li key={i} className="left_check_item">
                        <span className="icon">
                          <i className="fas fa-check"></i>
                        </span>
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
