import React from 'react'
import { Corusel } from './ui/corusel'
import { ParticlesApp } from './ui/particles'

export default function Section8() {
  return (
    <section className='section_8'>
      <ParticlesApp />
      <Corusel />
      <div className="left_box">
        <div className="title">
          <h2>WHY CHOOSE US</h2>
        </div>
        <div className="decr">
          <h1>20k+ clients love our service {"&"} IT related solution</h1>
        </div>
      </div>
    </section>
  )
}
