import React from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.css"
import img1 from "../../../images/E2x5Szv6xRMU.jpeg"
import img2 from "../../../images/DZyUIc9hSGy4.jpeg"
import img3 from "../../../images/lMGq7DkUtNni.jpeg"
import { Card } from "./styled";

export default function Corusel() {
    const data = [
        {
            title: "Analytic Solutions",
            img: img1,
            btn: "Servises",
            decr: `Accelerate innovation with world-class
                tech teams We'll match you to an entire remote
                team of incredible freelance
                talent for all your software development needs..`
        },
        {
            title: "Product Design",
            img: img2,
            btn: "Technology",
            decr: `Accelerate innovation with world-class
                tech teams We'll match you to an entire remote
                team of incredible freelance
                talent for all your software development needs..`
        },
        {
            title: "Aeroland Protocol",
            img: img3,
            btn: "Cyber Secuti",
            decr: `Accelerate innovation with world-class
                tech teams We'll match you to an entire remote
                team of incredible freelance
                talent for all your software development needs..`
        },
    ]

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
                        <Card className="card " style={{ background: `url(${item.img})`, backgroundSize: "contain" }}>
                            <div className="active"></div>
                            <div className="card_box">
                                <div className="left">
                                    <h1 className="title">
                                        {item.title}
                                    </h1>
                                    <span>{item.btn}</span>
                                </div>
                                <div className="center">
                                    <p>
                                        {item.decr}
                                    </p>
                                </div>
                                <div className="buttons">
                                    <span>{"->"}</span>
                                </div>
                            </div>
                        </Card>

                    </Slide>
                ))}
            </Slider>
            <ButtonBack className="prev">{"<-"}</ButtonBack>
            <ButtonNext className="next">{"->"}</ButtonNext>
        </CarouselProvider>
    );

}
