import React from "react";
import img_1 from "../../images/ctiaxRXYSAeB.jpg";
import img_2 from "../../images/5Y9VVobzMOQ2.png";
import Video from "./ui/Video";
import { useState } from "react";
export default function Section3({ data, upd }) {
  const [video, setVideo] = useState(false);
  const [section3, setSection3] = useState(data);
  const hendleChange = (e, data) => {
    // setSection3({
    //   ...section3,
    //   data=e.target.value
    // })
  };
  console.log(section3);
  return (
    <div className="section_3" id="about">
      {video ? <Video setVideo={setVideo} /> : null}

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
          <div className="play_btn" onClick={() => setVideo(true)}>
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
        <div className="col-6">
          <div className="text_box">
            <div className="first_text">
              <h6 className="smal_text">
                {upd ? (
                  <input
                    className="edit_input"
                    style={{ width: `${data.title1.length * 10}px` }}
                    type="text"
                    name="name"
                    value={section3.title1}
                    onChange={(e) =>
                      setSection3({ ...section3, title1: e.target.value })
                    }
                  />
                ) : (
                  section3.title1
                )}
              </h6>
            </div>
            <div className="big_title">
              <h1>
                {upd ? (
                  <input
                    className="edit_input"
                    style={{ width: `${data.title2.length * 7}px` }}
                    type="text"
                    name="name"
                    value={section3.title2}
                    onChange={(e) =>
                      setSection3({ ...section3, title2: e.target.value })
                    }
                  />
                ) : (
                  section3.title2
                )}
              </h1>
            </div>
            <div className="small_title">
              <p>
                {upd ? (
                  <textarea
                    className="edit_input"
                    style={{
                      width: `400px`,
                      height: `100px`,
                    }}
                    name={`text`}
                    type="text"
                    value={section3.title3}
                    onChange={(e) =>
                      setSection3({ ...section3, title3: e.target.value })
                    }
                  ></textarea>
                ) : (
                  section3.title3
                )}
              </p>
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
                    <div className="small"></div>
                    <div className="author_title">
                      <h4>
                        <b>
                          {upd ? (
                            <input
                              className="edit_input"
                              style={{
                                width: `${data.derektor.name.length * 10}px`,
                              }}
                              type="text"
                              name="name"
                              value={section3.derektor.name}
                              onChange={(e) =>
                                setSection3({
                                  ...section3,
                                  derektor: { name: e.target.value },
                                })
                              }
                            />
                          ) : (
                            section3.derektor.name
                          )}
                        </b>
                      </h4>
                      <p>
                        {upd ? (
                          <input
                            className="edit_input"
                            style={{
                              width: `${data.derektor.job.length * 10}px`,
                            }}
                            type="text"
                            name="name"
                            value={section3.derektor.job}
                            onChange={(e) =>
                              setSection3({
                                ...section3,
                                derektor: { job: e.target.value },
                              })
                            }
                          />
                        ) : (
                          section3.derektor.job
                        )}
                      </p>
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
                        <span>
                          {upd ? (
                            <input
                              className="edit_input"
                              style={{
                                width: `${item.title.length * 10}px`,
                              }}
                              type="text"
                              name="name"
                              value={section3.adjus[i].title}
                              onChange={(e) =>
                                setSection3({
                                  ...section3,
                                  adjus: {
                                    ...data.adjus,
                                    [i]: { title: e.target.value },
                                  },
                                })
                              }
                            />
                          ) : (
                            item.title
                          )}
                        </span>
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
