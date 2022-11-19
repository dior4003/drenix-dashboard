import React from "react";
import useCounter from "../../Hooks/counter";
export default function FullSection({ item = [], upd, section4, setSection4 }) {
  const num = useCounter(1000);

  return (
    <div className="full_section">
      <div className="section_background"></div>
      <div className="section_container">
        <div className="section_item">
          {item.map((item, i) => {
            return (
              <div key={i} className="item">
                <div className="image_box">
                  <img
                    src={`https://drenix-back.herokuapp.com/static/media/${item.img}`}
                    alt={item.title}
                  />
                </div>
                <div className="counter_box">
                  <span className="counter_item">
                    {upd ? (
                      <input
                        className="edit_input"
                        style={{
                          width: `180px`,
                          marginTop: "20px",
                          padding: "0px",
                        }}
                        type="text"
                        name="name"
                        value={
                          num < section4.fullSection[i].value
                            ? num
                            : section4.fullSection[i].value
                        }
                        onChange={(e) =>
                          setSection4({
                            ...section4,
                            fullSection: {
                              ...section4.fullSection,
                              [i]: {
                                value: e.target.value,
                              },
                            },
                          })
                        }
                      />
                    ) : num < item.value ? (
                      num
                    ) : (
                      item.value
                    )}
                  </span>
                  <div className="counter_icon">{item.icon}</div>
                </div>
                <p>
                  {upd ? (
                    <input
                      className="edit_input"
                      style={{
                        width: `180px`,
                        marginTop: "20px",
                        padding: "0px",
                      }}
                      type="text"
                      name="name"
                      value={section4.fullSection[i].title}
                      onChange={(e) =>
                        setSection4({
                          ...section4,
                          fullSection: {
                            ...section4.fullSection,
                            [i]: {
                              title: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  ) : (
                    item.title
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
