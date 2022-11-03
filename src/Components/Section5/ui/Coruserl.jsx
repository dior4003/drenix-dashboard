import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.css";

import { Card } from "./styled";

export default function Corusel({ data }) {
  return (
    <CarouselProvider
      naturalSlideWidth={270}
      naturalSlideHeight={150}
      totalSlides={3}
      visibleSlides={1}
      currentSlide={1}
      infinite={true}
    >
      <Slider className="slider">
        {data.map((item, i) => (
          <Slide index={i} key={i}>
            <Card
              className="card "
              style={{
                background: `url(https://drenix-back.herokuapp.com/static/media/${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: " top 60% center"
              }}
            >
              <div className="active"></div>
              {
                item.title
                ?(
                  <div className="card_box">
                  <div className="left">
                    <h1 className="title">{item.title}</h1>
                    <span>{item.btn}</span>
                  </div>
                  <div className="center">
                    <p>{item.decr}</p>
                  </div>
                  <div className="buttons">
                    <span>{"->"}</span>
                  </div>
                </div>
                ):null
              }
             
            </Card>
          </Slide>
        ))}
      </Slider>
      <ButtonBack className="prev">{"<-"}</ButtonBack>
      <ButtonNext className="next">{"->"}</ButtonNext>
    </CarouselProvider>
  );
}
