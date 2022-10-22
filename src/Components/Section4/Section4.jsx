import React from 'react'
import img1 from "../../images/x0LELqjTK6FC.jpg"
import img2 from "../../images/2AMRb2Ws4zIY.jpeg"
import img4 from "../../images/OfgD7rh4ZvN2.jpeg"
import img3 from "../../images/x9bZh1JVxPOe.jpeg"
import img_1 from "../../images/bnLecUweEITo.png"
import img_2 from "../../images/uQWkoarAw2Ap.png"
import img_3 from "../../images/X2HOAP5USAjF.png"
import img_4 from "../../images/RydMvaGPfTrW.png"
import FullSection from './ui/FullSection'
import Card from './ui/card'
import Progress from './ui/Progress'


export default function Section4() {
    const data=[
        {
            title: "IT Management",
            progress: 80,
        },
        {
            title: "Data Security",
            progress: 90,
        },
        {
            title: "Solution",
            progress: 90,
        },
    ],
        card = [
            {
                name: "Data Security",
                img: img1
            },
            {
                name: "Data Security",
                img: img2
            },
            {
                name: "Data Security",
                img: img3
            },
            {
                name: "Data Security",
                img: img4
            }
        ],
        items = [
            {
                value: 354,
                icon: "+",
                title: "Completed Projects",
                img: img_1
            },
            {
                value: 280,
                icon: "+",
                title: "Satisfied Clients",
                img: img_2
            },
            {
                value: 99,
                icon: "%",
                title: "Web Site Analyse",
                img: img_3
            },
            {
                value: 321,
                icon: "+",
                title: "Clients Support Done",
                img: img_4
            }
        ]
    return (
        <section className='section_4'>
            <div className="row">
                <div className="col-5">
                    <div className="background_section">
                        <div className="big_text">
                            <h1>25+</h1>
                        </div>
                        <div className="second_text">
                            <h1>Years of experience</h1>
                        </div>
                        <div className="thrid_text">
                            <h1>We run all kinds of <span>IT services</span>  that vow your success</h1>

                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="left_box">
                        <div className="box_title">
                            <h1>
                                Accelerate innovation with world-class tech teams
                                We'll match you to an entire remote technology
                            </h1>
                        </div>
                        <div className="progress_bar">
                            <ul className="progres_list">
                                <Progress data={data}/>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="cards_section">
                <div className="card_box">
                    <Card card={card}/>
                </div>
            </div>
            <FullSection item={items} />
        </section>
    )
}
