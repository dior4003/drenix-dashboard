import React from "react";
import { useState } from "react";
// import Redux from "../redux/redux";

export default function MainSection({ data, upd }) {
  const [update, setUpdate] = useState(data);
    // Redux("section1", update);

  
  return (
    <div className="main_box">
      <div
        className="main_box_background"
        style={{
          background: `url(https://drenix-back.herokuapp.com/static/media/zvGMcvWppYef.jpeg)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <div className="hero-content">
                <h3 className="sub-title aos-init aos-animate">
                  {upd ? (
                    <input
                      className="edit_input"
                      style={{ width: `${data.title1.length * 10}px` }}
                      type="text"
                      value={update.title1}
                      onChange={(e) =>
                        setUpdate({ ...update, title1: e.target.value })
                      }
                    />
                  ) : (
                    data.title1
                  )}
                </h3>
                <h2 className="title aos-init aos-animate">
                  {upd ? (
                    <input
                      className="edit_input"
                      style={{ width: `${data.title2.length * 10}px` }}
                      type="text"
                      value={update.title2}
                      onChange={(e) =>
                        setUpdate({ ...update, title2: e.target.value })
                      }
                    />
                  ) : (
                    data.title2
                  )}
                </h2>
                <p
                  data-aos-delay="1400"
                  data-aos="fade-up"
                  className="aos-init aos-animate"
                >
                  {upd ? (
                    <input
                      className="edit_input"
                      style={{ width: `${data.title3.length * 9}px` }}
                      type="text"
                      value={update.title3}
                      onChange={(e) =>
                        setUpdate({ ...update, title3: e.target.value })
                      }
                    />
                  ) : (
                    data.title3
                  )}
                </p>
                <div
                  className="tpc-btn-wrap aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="1900"
                >
                  <span className="tpc-btn">
                    {upd ? (
                      <input
                        className="edit_input"
                        style={{ width: `${data.button.length * 10}px` }}
                        type="text"
                        value={update.button}
                        onChange={(e) =>
                          setUpdate({ ...update, button: e.target.value })
                        }
                      />
                    ) : (
                      data.button
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
