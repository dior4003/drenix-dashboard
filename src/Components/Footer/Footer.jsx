import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/yxBeHcjJHpHN.png"
import Link_component from './ui/link_component'

export default function Footer() {
  const social = [
    {
      link: "#f",
      icon: "fa-brands fa-facebook",
    },
    {
      link: "",
      icon: "fa-brands fa-twitter"
    },
    {
      link: "",
      icon: "fa-brands fa-youtube",
    },

  ]
  const data = [
    {
      logo: logo,
      links: [
        {
          icon: "fa-regular fa-phone",
          title: "+91 458 654 528",
        },
        {
          icon: "fa-regular fa-envelope-open",
          title: "info@example.com",
        },
        {
          icon: "fa-regular fa-location-dot",
          title: "60 East 65th Street, NY",
        },
      ]

    },
    {
      logoTitle: "Useful Links",
      links: [
        {
          url: "",
          title: "Terms & condition",
        }, {
          url: "",
          title: "About Company",
        },
        {
          url: "",
          title: "Payment Gateway",
        },
        {
          url: "",
          title: "Privacy Policy",
        },
      ]
    },
    {
      logoTitle: "Our Services",
      links: [
        {
          url: "",
          title: "Data Security",
        }, {
          url: "",
          title: "IT Management",
        },
        {
          url: "",
          title: "Outsourcing",
        },
        {
          url: "",
          title: "Networking",
        },
      ]
    },
    {
      logoTitle: "Support",
      links: [
        {
          url: "",
          title: "Documentation",
        }, {
          url: "",
          title: "Support",
        },
        {
          url: "",
          title: "FAQS",
        },
        {
          url: "",
          title: "Download",
        },
      ]
    }

  ]

  return (
    <footer className='footer'>
      <div className='links'>
        {
          data.map((item, i) => (
            <Link_component item={item} key={i} />
          ))
        }
      </div>
      <hr />
      <div className="foo_bar">
        <p>© Copyright 2022 Techmax All rights reserved.</p>
        <ul className="social_box">
          {social.map((item, i) => (
            <li key={i}><Link to={item.link}><i className={item.icon}></i></Link></li>

          ))}
        </ul>

      </div>
    </footer>
  )
}
