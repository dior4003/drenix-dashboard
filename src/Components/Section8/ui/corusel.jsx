import React, { useState, useEffect } from "react";
import img1 from "../../../images/cRaEF7FJ78K5.jpg"
import img2 from "../../../images/WCBgvUsjYI6V.jpg"
import img3 from "../../../images/pcKlXgiuEJ1G.jpg"

const items = [
    {
        first_title: "Right Agency",
        icon: img1,
        title: 'I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it',
        name: "John Dowson",
        spec: "Developer",
    }, {
        first_title: "Right Agency",
        icon: img2,
        title: 'I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it',
        name: "John Dowson",
        spec: "Developer",
    }, {
        first_title: "Right Agency",
        icon: img3,
        title: 'I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it',
        name: "John Dowson",
        spec: "Developer",
    }, {
        first_title: "Right Agency",
        icon: img1,
        title: 'I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it',
        name: "John Dowson",
        spec: "Developer",
    }, {
        first_title: "Right Agency",
        icon: img2,
        title: 'I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it',
        name: "John Dowson",
        spec: "Developer",
    }, {
        first_title: "Right Agency",
        icon: img3,
        title: 'I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it',
        name: "John Dowson",
        spec: "Developer",
    },
];

const Card = (props) => {
    return (
        <li className="card_">

            <h2>{props.first_title}</h2>
            <p className="p">{props.title}</p>
            <div className="author">
                <div className="icon" >
                    <img src={props.icon} alt="" />
                </div>
                <div className="text">
                    <h4>{props.name}</h4>
                    <p>{props.spec}</p>
                </div>
            </div>

        </li>
    )
}

export function Corusel() {
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(items);

    useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems])
    useEffect(() => {
        const interval = setInterval(() => {
            setMoveClass('prev')
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [moveClass]);

    const handleAnimationEnd = () => {
        if (moveClass === 'prev') {
            shiftNext([...carouselItems]);
        } else if (moveClass === 'next') {
            shiftPrev([...carouselItems]);
        }
        setMoveClass('')
    }

    const shiftPrev = (copy) => {
        let lastcard = copy.pop();
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
    }

    const shiftNext = (copy) => {
        let firstcard = copy.shift();
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
    }

    return (
        <div className="carouselwrapper module-wrapper">
            <div className="ui">
                <button onClick={() => setMoveClass('next')} className="prev">
                    <span className="material-icons">{"<-"}</span>
                </button>
                <button onClick={() => setMoveClass('prev')} className="next">
                    <span className="material-icons">{"->"}</span>
                </button>
            </div>
            <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel_`}>
                {carouselItems.map((t, index) =>
                    <Card key={index} icon={t.icon} title={t.title} first_title={t.first_title} name={t.name} spec={t.spec} />
                )}
            </ul>
        </div>
    )
}
