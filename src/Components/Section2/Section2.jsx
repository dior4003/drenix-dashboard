import React from "react";
import { useState } from "react";
// import Redux from "../redux/redux";

export default function Section2({ data, upd }) {
  const [seaction2, setSection2] = useState(data);

  const hendleChange = (index, e) => {
    let newArr = [...seaction2];
    if (e.target.name === `int${index}`) {
      newArr[index] = {
        ...newArr[index],
        title: e.target.value,
      };
      setSection2(newArr);
    }
    if (e.target.name === `text${index}`) {
      newArr[index] = {
        ...newArr[index],
        sub_title: e.target.value,
      };
      setSection2(newArr);
    }
  };
  // Redux("section2", seaction2);
  return (
    <section className="elementor-section">
      <div className="row">
        {seaction2.map((item, i) => (
          <div className="col-3" key={item.title}>
            <div className="a">
              <div className="card_">
                <div className="card_body">
                  <span className="shape"></span>
                  <div className="logo">
                    <img
                      src={`https://drenix-back.herokuapp.com/static/media/${item.img}`}
                      alt={`https://drenix-back.herokuapp.com/static/media/${item.img}`}
                    />
                  </div>
                  <div className="title">
                    <h2>
                      {upd ? (
                        <input
                          className="edit_input"
                          style={{ width: `${item.title.length * 20}px` }}
                          type="text"
                          name={`int${i}`}
                          value={seaction2[i].title}
                          onChange={(e) => hendleChange(i, e)}
                        />
                      ) : (
                        item.title
                      )}
                    </h2>
                  </div>
                  <div className="sub_title">
                    <p>
                      {upd ? (
                        <textarea
                          className="edit_input"
                          style={{
                            width: `100%`,
                            height: `200px`,
                          }}
                          name={`text${i}`}
                          type="text"
                          value={seaction2[i].sub_title}
                          onChange={(e) => hendleChange(i, e)}
                        ></textarea>
                      ) : (
                        item.sub_title
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
