import React from "react";

export default function Card({ card }) {
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
            <h3>{item.text}</h3>
          </div>
          <div className="card_btn">
            <span>Learn More{" ->"}</span>
          </div>
        </div>
      ))}
    </>
  );
}
