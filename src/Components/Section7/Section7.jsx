import React from 'react'
import img1 from "../../images/4nD6kCDrcCnk.jpg"
import img2 from "../../images/EErjIAIr9JCI.jpeg"
import img3 from "../../images/vQHnrc1woxWY.jpg"
import img4 from "../../images/5AsgzAGyM0DW.jpg"
import { Link } from 'react-router-dom'

export default function Section7() {
  const data = [
    {
      name: "Sam Williams",
      spes: "CEO & Founder",
      img: img1,
       facebook: {
        link: "#f",
        icon: "fa-brands fa-facebook",
      },
      twitter: {
        link: "",
        icon: "fa-brands fa-twitter"
      },
      youtube: {
        link: "",
        icon: "fa-brands fa-youtube",
      },
    },
    {
      name: "Sam Williams",
      spes: "CEO & Founder",
      img: img2,
      facebook: {
        link: "#f",
        icon: "fa-brands fa-facebook",
      },
      twitter: {
        link: "",
        icon: "fa-brands fa-twitter"
      },
      youtube: {
        link: "",
        icon: "fa-brands fa-youtube",
      },
    },
    {
      name: "Sam Williams",
      spes: "CEO & Founder",
      img: img3,
      facebook: {
        link: "#f",
        icon: "fa-brands fa-facebook",
      },
      twitter: {
        link: "",
        icon: "fa-brands fa-twitter"
      },
      youtube: {
        link: "",
        icon: "fa-brands fa-youtube",
      },
    },
    {
      name: "Sam Williams",
      spes: "CEO & Founder",
      img: img4,
      facebook: {
        link: "#f",
        icon: "fa-brands fa-facebook",
      },
      twitter: {
        link: "",
        icon: "fa-brands fa-twitter"
      },
      youtube: {
        link: "",
        icon: "fa-brands fa-youtube",
      },
    },
  ]
  return (
    <section className='section_7'>
      <div className="container">
        <div className="row">
          <div className="text_">
            <h4>HIGHLY PROFESSIONAL STAFFS</h4>
          </div>
          <div className="decr">
            <h1>IT technology and technical fields professional staff</h1>
          </div>
          <div className="card_box">
            {data.map((item, i) => (
              <div key={i} style={{ background: `url(${item.img})`, backgroundSize: "cover" }} className="card">
                <div className="cards">
                  <div className="shape">
                    <ul className="social_box">
                      <li><Link to={item.facebook.link}><i className={item.facebook.icon}></i></Link></li>
                      <li><Link to={item.twitter.link}><i className={item.twitter.icon}></i></Link></li>
                      <li><Link to={item.youtube.link}><i className={item.youtube.icon}></i></Link></li>

                    </ul>
                  </div>
                </div>
                
                <div className="decr_box">
                  <h4 className="author">{item.name}</h4>
                  <p>{item.spes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
