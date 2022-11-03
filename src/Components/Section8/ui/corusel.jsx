import React, { useState, useEffect } from "react";

const Card = (props) => {
  return (
    <li className="card_">
      {props.move?null: <h2>{props.first_title}</h2>}
     
      <p className="p">{props.move?props.title:props.title.slice(0, 60)}</p>
      {props.move?null:(
        <div className="author">
        <div className="icon">
          <img src={`https://drenix-back.herokuapp.com/static/media/${props.icon}`} alt="" />
        </div>
        <div className="text">
          <h4>{props.name}</h4>
          <p>{props.spec}</p>
        </div>
        </div>
      )}
     
    </li>
  );
};

export function Corusel({ data }) {
  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(data);
  const [move ,setMove]=useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);
  }, [carouselItems]);
  useEffect(() => {
    const interval = setInterval(() => {
      setMoveClass("prev");
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [moveClass]);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={() => setMoveClass("next")} className="prev">
          <span className="material-icons">{"<-"}</span>
        </button>
        <button onClick={() => setMoveClass("prev")} className="next">
          <span className="material-icons">{"->"}</span>
        </button>
      </div>
      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel_`}
        onMouseEnter={() => setMove(true)}
        onMouseLeave={() => setMove(false)}
      >
        {carouselItems.map((t, index) => (
          <Card
            key={index}
            icon={t.icon}
            title={t.title}
            first_title={t.first_title}
            name={t.name}
            spec={t.spec}
            move={move}
          />
        ))}
      </ul>
    </div>
  );
}
