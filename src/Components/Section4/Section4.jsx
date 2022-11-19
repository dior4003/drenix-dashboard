import React from "react";
import FullSection from "./ui/FullSection";
import Card from "./ui/card";
import Progress from "./ui/Progress";
import { useState } from "react";

export default function Section4({ data, upd }) {
  const [section4, setSection4] = useState(data);
  return (
    <section className="section_4">
      <div className="row">
        <div className="col-5">
          <div className="background_section">
            <div className="big_text">
              <h1>
                {upd ? (
                  <input
                    className="edit_input"
                    style={{
                      width: `${data.year.length * 10}px`,
                    }}
                    type="text"
                    name="name"
                    value={section4.year}
                    onChange={(e) =>
                      setSection4({
                        ...section4,
                        year: e.target.value,
                      })
                    }
                  />
                ) : (
                  data.year
                )}
                +
              </h1>
            </div>
            <div className="second_text">
              <h1>
                {upd ? (
                  <input
                    className="edit_input"
                    style={{
                      width: `${data.title1.length * 10}px`,
                    }}
                    type="text"
                    name="name"
                    value={section4.title1}
                    onChange={(e) =>
                      setSection4({
                        ...section4,
                        title1: e.target.value,
                      })
                    }
                  />
                ) : (
                  data.title1
                )}
              </h1>
            </div>
            <div className="thrid_text">
              <h1>
                {upd ? (
                  <textarea
                    className="edit_input"
                    style={{
                      width: `70%`,
                      height: `100px`,
                    }}
                    name={`text`}
                    type="text"
                    value={section4.title2}
                    onChange={(e) =>
                      setSection4({
                        ...section4,
                        title2: e.target.value,
                      })
                    }
                  ></textarea>
                ) : (
                  data.title2
                )}
              </h1>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="left_box">
            <div className="box_title">
              <h1>
                {upd ? (
                  <textarea
                    className="edit_input"
                    style={{
                      width: `300px`,
                      height: `100px`,
                    }}
                    name={`text`}
                    type="text"
                    value={section4.title3}
                    onChange={(e) =>
                      setSection4({
                        ...section4,
                        title3: e.target.value,
                      })
                    }
                  ></textarea>
                ) : (
                  data.title3
                )}
              </h1>
            </div>
            <div className="progress_bar">
              <ul className="progres_list">
                <Progress
                  data={data.skills}
                  upd={upd}
                  section4={section4}
                  setSection4={setSection4}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_section">
        <div className="card_box">
          <Card
            card={data.courses}
            upd={upd}
            section4={section4}
            setSection4={setSection4}
          />
        </div>
      </div>
      <FullSection
        item={data.fullSection}
        upd={upd}
        section4={section4}
        setSection4={setSection4}
      />
    </section>
  );
}
