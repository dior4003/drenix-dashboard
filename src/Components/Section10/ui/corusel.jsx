import React from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.css"
import img1 from "../../../images/0ITuFFj8vUde.png"
import img2 from "../../../images/CetnYdNMWPlx.png"
import img3 from "../../../images/oTWCh8t3mzYV.png"
import img4 from "../../../images/LjBLBlrYO1XN.png"
import img5 from "../../../images/xkTKQm2t665j.png"

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
        {
            title: "Aeroland Protocol",
            img: img4,
            btn: "Cyber Secuti",
            decr: `Accelerate innovation with world-class
                tech teams We'll match you to an entire remote
                team of incredible freelance
                talent for all your software development needs..`
        },
        {
            title: "Aeroland Protocol",
            img: img5,
            btn: "Cyber Secuti",
            decr: `Accelerate innovation with world-class
                tech teams We'll match you to an entire remote
                team of incredible freelance
                talent for all your software development needs..`
        },
    ]

    return (
        <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={50}
            totalSlides={5}
            visibleSlides={1.3}
            currentSlide={2}
            infinite={true}
        >
            <Slider id="corusel">
                {data.map((item, i) => (
                    <Slide index={i} key={i} className="sll">

                        <img src={item.img} alt="" style={{ width: "160px", height: "90px" }} />
                    </Slide>
                ))}
            </Slider>
        </CarouselProvider>
    );

}
