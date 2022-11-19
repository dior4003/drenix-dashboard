import React from "react";

export default function Card({ card, upd, section4, setSection4 }) {
  return (
    <>
      {card.map((item, i) => (
        <div
          key={i}
          className="card_item"
          style={{
            backgroundImage: `url(https://drenix-back.herokuapp.com/static/media/${item.img})`,
          }}
        >
          <div className="card_title">
            <h3>
              {upd ? (
                <input
                  className="edit_input"
                  style={{
                    width: `120px`,
                    marginTop: "20px",
                    padding: "0px",
                  }}
                  type="text"
                  name="name"
                  value={section4.courses[i].text}
                  onChange={(e) =>
                    setSection4({
                      ...section4,
                      courses: {
                        ...section4.courses,
                        [i]: {
                          text: e.target.value,
                        },
                      },
                    })
                  }
                />
              ) : (
                item.text
              )}
            </h3>
          </div>
          <div className="card_btn">
            <span style={{ padding: "5px 20px" }}>{" ->"}</span>
          </div>
        </div>
      ))}
      <div
        className="card_item"
        style={{
          background: `gray`,
        }}
      >
        <div className="card_title">
          <h3>Add +</h3>
        </div>
        <div className="card_btn">
          <span style={{ padding: "5px 20px" }}>{" ->"}</span>
        </div>
      </div>
    </>
  );
}
