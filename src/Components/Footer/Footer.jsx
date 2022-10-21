import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/yxBeHcjJHpHN.png"
import LinkComponent from './ui/link_component'

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
      logo: {
        url:logo,
        type:"img",
      },
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
      logo: {
        url:"Useful Links",
        type: "text",
      },
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
      logo: {
        url:"Our Services",
        type: "text",
      },
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
      logo: {
        url:"Support",
        type: "text",
      },
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
            <LinkComponent item={item} key={i} />
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
