import React from 'react'
import { Link } from 'react-router-dom'
import Corusel from './ui/Coruserl'

export default function Section5() {

  return (
    <section className='section_5'>
      <div className="first_title">
        <h1>PROJECT CASE STUDY</h1>
      </div>
      <div className="second_title">
        <h1>We are proud team of great project</h1>
      </div>
      <div className="corusel_section">
        <Corusel />
      </div>
      <div className="tpc-btn-wrap aos-init aos-animate" data-aos="fade-up" data-aos-delay="1900">
        <Link className="tpc-btn" to="#a">
          See More Projects
        </Link>
      </div>
    </section>
  )
}
