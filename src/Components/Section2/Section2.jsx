import React, { useState } from 'react'
import img1_1 from "../../images/MT4sh7iV8Ju7.png"
import img1_2 from "../../images/icon@15x.png";
import img3 from "../../images/kTfOtgQDzjre.png"
import img2 from "../../images/2img@15x.png"
import img4 from "../../images/4icon@15x.png"
import { Link } from 'react-router-dom'

export default function Section2() {
    const [data, setData] = useState([
        {
            img: img1_2,
            title: "Strategy & Discovery",
            sub_title: "We provide the most responsive and functional IT design for companies and businesses worldwide."
        },
        {
            img: img2,
            title: "Software Solution",
            sub_title: "We provide the most responsive and functional IT design for companies and businesses worldwide."
        },
        {
            img: img2,
            title: "Technology Solution",
            sub_title: "We provide the most responsive and functional IT design for companies and businesses worldwide."
        },
        {
            img: img4,
            title: "Business Analytics",
            sub_title: "We provide the most responsive and functional IT design for companies and businesses worldwide."
        }
    ])
    return (
        <section className="elementor-section" >
            <div className="row">
                {data.map(item => (
                    <div className="col-3" key={item.title}>
                        <Link to="/" >
                            <div className="card_">
                                <div className="card_body">
                                    <span className="shape"></span>
                                    <div className="logo">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="title">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className="sub_title">
                                        <p>{item.sub_title}</p>
                                    </div>
                                </div>
                            </div>

                        </Link>
                    </div>
                ))}

            </div>


        </section>
    )
}
