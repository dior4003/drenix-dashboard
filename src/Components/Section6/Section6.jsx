import React from 'react'
import img1 from "../../images/gRzLx7vhLY9k.png"
import img2 from "../../images/faTD9UvvWOUP.png"
import img3 from "../../images/qVn78YuXyXDo.png"
import img4 from "../../images/RydMvaGPfTrW.png"


export default function Section6() {
    const data = [
        {
            title: "Expert Team",
            decr: "Accelerate innovation with world-class tech teams",
            icon: img1,
        },
        {
            title: "Quality Control",
            decr: "Accelerate innovation with world-class tech teams",
            icon: img2,
        },
        {
            title: "Integration",
            decr: "Accelerate innovation with world-class tech teams",
            icon: img3,
        },
        {
            title: "24/7 Support",
            decr: "Accelerate innovation with world-class tech teams",
            icon: img4,
        },
    ]
    return (
        <section className='section_6'>
            <div className="img_section">
                <div className="back"></div>
                <div className="img"></div>

            </div>
            <div className="decr_section">
                <div className="title">
                    <h4>WHY CHOOSE US</h4>
                </div>
                <div className="decr">
                    <h2>We provide truly prominent IT solutions for your success</h2>
                </div>
                <div className="card_box">
                    {data.map((item, i) => (
                        <div className="card" key={i}>
                            <div className="icon">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <div className="text_box">
                                <div className="title">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="decri">
                                    <p>{item.decr}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    
                </div>
            </div>
        </section>
    )
}
